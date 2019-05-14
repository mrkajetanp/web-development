
let someArray = [1, "string", false];

// Values
for (let entry of someArray) {
    console.log(entry);
}

// Indexes
for (let i in someArray) {
    console.log(i);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet);
}
