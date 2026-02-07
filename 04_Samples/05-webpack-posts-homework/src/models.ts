import { IUser, IPost } from './interfaces';

export abstract class Entity<T> {
    constructor(public data: T) {}

    abstract printInfo(): void;
}

export class User extends Entity<IUser> {
    printInfo(): void {
        console.log(`User: ${this.data.name} (${this.data.email})`);
    }
}

export class Post extends Entity<IPost> {
    printInfo(): void {
        console.log(
            `Post: "${this.data.title}" (authorId: ${this.data.authorId})`,
        );
    }
}
