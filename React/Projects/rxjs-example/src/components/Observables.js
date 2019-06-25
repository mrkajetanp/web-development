import React from 'react';
import { Observable } from 'rxjs';

function Observables() {
    let observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
        next(x) { console.log('got value ' + x); },
        error(err) { console.log('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
    });
    console.log('just after subscribe');


    let foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
    });

    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
    console.log('before');
    foo.subscribe(y => {
      console.log(y);
    });
    console.log('after');

    return (
        <div>
            <p>Observables</p>
        </div>
    );
}

export default Observables;
