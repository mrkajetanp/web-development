import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    let separate = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(separate);

    _.forEach([1, 2], function(value) {
        console.log(value);
    });

    _.forEach([3, 4], value => console.log(value));

    var saves = ['profile', 'settings'];

    var done = _.after(saves.length, function() {
      console.log('done saving!');
    });

    _.forEach(saves, function(type) {
      asyncSave({ 'type': type, 'complete': done });
    });

    _.castArray(1);
    // => [1]

    _.castArray({ 'a': 1 });
    // => [{ 'a': 1 }]

    _.castArray('abc');
    // => ['abc']

    _.max([4, 2, 8, 6]);

    _.inRange(3, 2, 4);
    // => true

    _.inRange(4, 8);
    // => true

    _.inRange(4, 2);
    // => false

    function Foo() {
      this.a = 1;
    }

    function Bar() {
      this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    _.assign({ 'a': 0 }, new Foo, new Bar);
    // => { 'a': 1, 'c': 3 }

    var users = [
      { 'user': 'barney',  'age': 36 },
      { 'user': 'fred',    'age': 40 },
      { 'user': 'pebbles', 'age': 1 }
    ];

    var youngest = _
      .chain(users)
      .sortBy('age')
      .map(function(o) {
        return o.user + ' is ' + o.age;
      })
      .head()
      .value();
    // => 'pebbles is 1'

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
