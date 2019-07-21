import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { fromEvent } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//     .pipe(scan(count => count + 1, 0))
//     .subscribe(count => console.log(`Clicked ${count} times`));

fromEvent(document, 'click')
    .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Clicked ${count} times`));

// fromEvent(document, 'click')
//     .pipe(
//         throttleTime(1000),
//         map(event => event.clientX),
//         scan((count, clientX) => count + clientX, 0)
//     )
//     .subscribe(count => console.log(count));
//
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
