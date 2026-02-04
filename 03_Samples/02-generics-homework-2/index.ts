type ID = string | number;

interface Entity {
    readonly id: ID;
}

class Repository<T extends Entity> {
    protected items: Map<ID, T> = new Map();

    add(item: T): void {
        this.items.set(item.id, item);
    }

    getById(id: ID): T | undefined {
        return this.items.get(id);
    }

    getAll(): readonly T[] {
        return Array.from(this.items.values());
    }

    remove(id: ID): boolean {
        return this.items.delete(id);
    }
}

interface User extends Entity {
    name: string;
    email: string;
}

class UserRepository extends Repository<User> {
    findByEmail(email: string): User | undefined {
        return this.getAll().find((user) => user.email === email);
    }
}

class UserService {
    constructor(private readonly repo: UserRepository) {}

    async register(user: User): Promise<User> {
        const exists = this.repo.findByEmail(user.email);

        if (exists) {
            throw new Error('User already exists');
        }

        this.repo.add(user);
        return user;
    }

    getUsers(): readonly User[] {
        return this.repo.getAll();
    }
}

async function main(): Promise<void> {
    const userRepo = new UserRepository();
    const userService = new UserService(userRepo);

    await userService.register({
        id: 1,
        name: 'Vadim',
        email: 'vadim@mail.com',
    });

    console.log(userService.getUsers());
}

main().catch(console.error);
