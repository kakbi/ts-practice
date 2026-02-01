namespace Cars {
    export abstract class Car {
        constructor(
            public readonly name: string,
            public readonly model: string,
            public readonly year: number,
            protected engineType: string,
            protected weight: number,
            private id: number,
        ) {}

        abstract describe(): void;
        abstract getDescription(): string;

        protected formatDescription(): string {
            return `${this.name} ${this.model} (${this.year}) - Engine: ${this.engineType}, Weight: ${this.weight}kg`;
        }

        protected getId(): number {
            return this.id;
        }
    }

    export class BMW extends Car {
        constructor(
            name: string,
            model: string,
            year: number,
            engineType: string,
            weight: number,
            id: number,
            public luxuryPackage: boolean = true,
        ) {
            super(name, model, year, engineType, weight, id);
        }

        describe(): void {
            console.log(this.getDescription());
            console.log('Luxury Package:', this.luxuryPackage);
            console.log('Car ID (protected access):', this.getId());
        }

        getDescription(): string {
            return this.formatDescription();
        }
    }

    export class Audi extends Car {
        constructor(
            name: string,
            model: string,
            year: number,
            engineType: string,
            weight: number,
            id: number,
            protected sportMode: boolean = false,
        ) {
            super(name, model, year, engineType, weight, id);
        }

        describe(): void {
            console.log(this.getDescription());
            console.log('Sport Mode:', this.sportMode);
            console.log('Car ID (protected access):', this.getId());
        }

        getDescription(): string {
            return this.formatDescription();
        }
    }

    export class Toyota extends Car {
        constructor(
            name: string,
            model: string,
            year: number,
            engineType: string,
            weight: number,
            id: number,
            public ecoFriendly: boolean = true,
        ) {
            super(name, model, year, engineType, weight, id);
        }

        describe(): void {
            console.log(this.getDescription());
            console.log('Eco Friendly:', this.ecoFriendly);
            console.log('Car ID (protected access):', this.getId());
        }

        getDescription(): string {
            return this.formatDescription();
        }
    }
}

const cars: Cars.Car[] = [
    new Cars.BMW('BMW', 'X5', 2022, 'V6', 2200, 101),
    new Cars.BMW('BMW', 'M3', 2023, 'V8', 1800, 102),

    new Cars.Audi('Audi', 'A6', 2021, 'V6', 2000, 201),
    new Cars.Audi('Audi', 'Q7', 2022, 'V8', 2500, 202, true),

    new Cars.Toyota('Toyota', 'Corolla', 2020, 'I4', 1500, 301),
    new Cars.Toyota('Toyota', 'Camry', 2021, 'V6', 1700, 302, false),
];

for (const car of cars) {
    car.describe();
}
