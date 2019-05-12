function identity(arg) {
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var output = identity("myString");
var output2 = identity("myString");
var myIdentity = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentityX(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentityX({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
function create(c) {
    return new c();
}
