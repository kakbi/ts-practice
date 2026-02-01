interface Identifiable {
    id: number;
}

class Repository<T extends Identifiable> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getById(id: number): T | undefined {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return this.items[id];
            }
        }
        return undefined;
    }

    getAll(): T[] {
        return this.items;
    }

    removeById(id: number): boolean {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

class User implements Identifiable {
    constructor(
        public id: number,
        public name: string,
        public email: string,
    ) {}
}

var userRepo = new Repository<User>();

userRepo.add(new User(1, 'Alice', 'alice@gmail.com'));
userRepo.add(new User(2, 'John', 'john@gmail.com'));

console.log('Все пользователи:', userRepo.getAll());

console.log('Пользователь с id=1:', userRepo.getById(1));

console.log('Удаляем пользователя с id=2:', userRepo.removeById(2));

console.log('Осталось:', userRepo.getAll());
