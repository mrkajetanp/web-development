

function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString1 = padLeft("Hello there", 0);
let indentedString2 = padLeft("Hello there", "test");

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    return null;
}

let pet = getSmallPet();
pet.layEggs();
// pet.swim(); // Error
