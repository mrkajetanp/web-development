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

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
