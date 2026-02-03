namespace MyDictionary {
    export class Dictionary<K, V, D> {
        private _key: K;
        protected _value: V;
        public _description: D;

        constructor(key: K, value: V, description: D) {
            this._key = key;
            this._value = value;
            this._description = description;
        }

        get key(): K {
            return this._key;
        }

        set key(newKey: K) {
            this._key = newKey;
        }

        get value(): V {
            return this._value;
        }

        set value(newValue: V) {
            this._value = newValue;
        }

        get description(): D {
            return this._description;
        }

        set description(newDescription: D) {
            this._description = newDescription;
        }
    }
}

const term1 = new MyDictionary.Dictionary<string, string, string>(
    'OOP',
    'Object-Oriented Programming',
    'Объектно-ориентированное программирование',
);

console.log(term1.key);
console.log(term1.value);
console.log(term1.description);

const term2 = new MyDictionary.Dictionary<number, boolean, object>(1, true, {
    author: 'TypeScript',
    year: 2025,
});

term2.value = false;
console.log(term2.value);
