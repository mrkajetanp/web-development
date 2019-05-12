
function identity<T>(arg: T): T {
    return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

let output = identity<string>("myString");

// Type inference
let output2 = identity("myString");

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: {<T>(arg: T): T} = identity;

// Interfaces

interface GenericIdentityFunction {
    <T>(arg: T): T;
}

let myIdentity3: GenericIdentityFunction = identity;

interface GenericIdentityFunction2<T> {
    (arg: T): T;
}

let myIdentity4: GenericIdentityFunction2<number> = identity;

// Classes

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// Constraints

interface Lengthwise {
    length: number;
}

function loggingIdentityX<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentityX({length: 10, value: 3});

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");

function create<T>(c: { new(): T; }): T {
    return new c();
}
