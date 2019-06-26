import React from 'react';
import { Subject, from } from 'rxjs';

function Subjects() {
    console.log('** Subjects **');

    let subject = new Subject<number>();

    subject.subscribe({
        next: (v) => console.log(`observerA: ${v}`)
    });

    subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    let observable = from([1, 2, 3]);
    observable.subscribe(subject);

    return (
        <p>Subjects</p>
    );
}

export default Subjects;
