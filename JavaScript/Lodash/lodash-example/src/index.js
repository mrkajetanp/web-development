import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    let separate = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(separate);

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
