namespace TermDictionary {
    export interface ITerm<K, V, D> {
        key: K;
        value: V;
        description: D;
    }

    export class Term<K, V, D> implements ITerm<K, V, D> {
        private _key: K;
        private _value: V;
        private _description: D;

        constructor(key: K, value: V, description: D) {
            this._key = key;
            this._value = value;
            this._description = description;
        }

        get key(): K {
            return this._key;
        }

        set key(value: K) {
            this._key = value;
        }

        get value(): V {
            return this._value;
        }

        set value(value: V) {
            this._value = value;
        }

        get description(): D {
            return this._description;
        }

        set description(value: D) {
            this._description = value;
        }
    }

    export class Dictionary<K, V, D> {
        private terms: Array<ITerm<K, V, D>> = [];

        add(term: ITerm<K, V, D>): void {
            this.terms.push(term);
        }

        getByKey(key: K): ITerm<K, V, D> | undefined {
            return this.terms.find((term) => term.key === key);
        }

        getAll(): ReadonlyArray<ITerm<K, V, D>> {
            return this.terms;
        }
    }
}

const programmingTerms = new TermDictionary.Dictionary<
    string,
    string,
    string
>();

programmingTerms.add(
    new TermDictionary.Term(
        'OOP',
        'Object-Oriented Programming',
        'Объектно-ориентированное программирование',
    ),
);

programmingTerms.add(
    new TermDictionary.Term(
        'API',
        'Application Programming Interface',
        'Программный интерфейс приложения',
    ),
);

const term = programmingTerms.getByKey('OOP');
console.log(term?.value);

const systemFlags = new TermDictionary.Dictionary<number, boolean, object>();

systemFlags.add(
    new TermDictionary.Term(1, true, { module: 'Auth', critical: true }),
);

const flag = systemFlags.getByKey(1);
console.log(flag?.description);
