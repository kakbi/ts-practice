namespace Animals {
    export enum MovementType {
        Walk = 'walk',
        Fly = 'fly',
        Swim = 'swim',
    }

    export interface Animal {
        readonly name: string;
        readonly age: number;
        readonly movement: readonly MovementType[];

        move(): void;
        canMove(type: MovementType): boolean;
    }

    abstract class BaseAnimal implements Animal {
        constructor(
            public readonly name: string,
            public readonly age: number,
            public readonly movement: readonly MovementType[],
        ) {}

        move(): void {
            console.log(this.name + ' moves by: ' + this.movement.join(', '));
        }

        canMove(type: MovementType): boolean {
            return this.movement.indexOf(type) !== -1;
        }
    }

    export class Cat extends BaseAnimal {
        constructor(name: string, age: number) {
            super(name, age, [MovementType.Walk, MovementType.Swim]);
        }
    }

    export class Bird extends BaseAnimal {
        constructor(name: string, age: number) {
            super(name, age, [MovementType.Fly, MovementType.Walk]);
        }
    }

    export class Fish extends BaseAnimal {
        constructor(name: string, age: number) {
            super(name, age, [MovementType.Swim]);
        }
    }
}

const animals: Animals.Animal[] = [
    new Animals.Cat('Murka', 3),
    new Animals.Bird('Kesha', 1),
    new Animals.Fish('Dori', 2),
];

for (const animal of animals) {
    animal.move();

    console.log('Can walk:', animal.canMove(Animals.MovementType.Walk));
    console.log('Can fly:', animal.canMove(Animals.MovementType.Fly));
    console.log('Can swim:', animal.canMove(Animals.MovementType.Swim));
}
