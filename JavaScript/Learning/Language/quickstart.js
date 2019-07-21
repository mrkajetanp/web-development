
let obj = {
    name: 'Carrot',
    _for: 'Max',
    details: {
        color: 'orange',
        size: 12
    }
};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person = Person("You", 24);

let a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length;

a = ['dog', 'cat', 'hen'];

a[100] = 'test';
a.length; // 101

for (let x of a) {
    // x -> item
}

a.forEach(elem => {
    console.log(elem);
});


function Person2(first, last) {
    this.first = first;
    this.last = last;

    this.fullName = function() {
        return this.first + ' ' + this.last;
    }

    this.fullNameReversed = function() {
        return this.last + ' ' + this.first;
    }
}

let s = new Person2('Simon', 'Willison');
