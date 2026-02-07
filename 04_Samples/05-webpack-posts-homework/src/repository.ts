import { Entity } from './models';

export abstract class Repository<T extends Entity<any>> {
    protected items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): readonly T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find((item) => item.data.id === id);
    }

    removeById(id: number): void {
        this.items.filter((item) => item.data.id !== id);
    }
}
