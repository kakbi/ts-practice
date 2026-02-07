import { User, Post } from './models';
import { Repository } from './repository';

export class UserService extends Repository<User> {
    findByEmail(email: string): User | undefined {
        return this.items.find((user) => user.data.email === email);
    }
}

export class PostService extends Repository<Post> {
    getPostsByAuthor(authorId: number): Post[] {
        return this.items.filter((post) => post.data.authorId === authorId);
    }
}
