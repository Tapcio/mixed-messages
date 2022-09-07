export class Person {
    constructor(name, salary, isGreen, isPubs,isGoodTransport) {
        this._name = name;
        this._salary = salary;
        this._isGreen = isGreen;
        this._isPubs = isPubs;
        this._isGoodTransport = isGoodTransport;
    };
    get name() {
        return this._name;
    };
    get salary() {
        return this._salary;
    };
    get isGreen() {
        return this._isGreen;
    };
    get isPubs() {
        return this._isPubs;
    };
    get isGoodTransport() {
        return this._isGoodTransport;
    };
};

export class Borough extends Person {
    constructor(name, salary, isGreen, isPubs,isGoodTransport) {
        super(name, salary, isGreen, isPubs,isGoodTransport)
    }
};

export function findBoroughs(person, boroughs) {
    let array = [];
    for (let i = 0; i < boroughs.length; i++) {
        if (person.isGoodTransport === "no" || person.isGoodTransport === boroughs[i].isGoodTransport) {
            if (person.isPubs === "no" || person.isPubs === boroughs[i].isPubs) {
                if (person.isGreen === "no" || person.isGreen === boroughs[i].isGreen) {
                    if (person.salary >= boroughs[i].salary) {
                        array.push(boroughs[i].name)
                    }
                }
            }
        }
    }
    return `Hi ${person.name}, here is a list of Boroughs for you to live: ${array}`
}