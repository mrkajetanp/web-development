var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry);
}
for (var i in someArray) {
    console.log(i);
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet_1 in pets) {
    console.log(pet_1);
}
