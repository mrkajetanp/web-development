import React from 'react';

import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

function Schedulers() {
    console.log('** Schedulers **');

    let observable = new Observable((proxyObserver) => {
        proxyObserver.next(1);
        proxyObserver.next(2);
        proxyObserver.next(3);
        proxyObserver.complete();
    }).pipe(
        observeOn(asyncScheduler)
    );

    let finalObserver = {
        next(x) {
            console.log('got value' + x);
        },
        error(err) {
            console.log('something wrong occurred ' + err)
        },
        complete() {
            console.log('done');
        }
    };

    console.log('just before subscribe');
    observable.subscribe(finalObserver);
    console.log('just after subscribe');

    return (
        <p>Schedulers</p>
    );
}

export default Schedulers;
