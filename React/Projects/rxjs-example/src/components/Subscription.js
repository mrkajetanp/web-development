import React from 'react';

import { interval } from 'rxjs';

function  Subscription() {
    console.log('** Subscription **');

    let observable1 = interval(400);
    let observable2 = interval(300);

    let subscription = observable1.subscribe(x => console.log('first: ' + x));
    let childSubscription = observable2.subscribe(x => console.log('second: ' + x));

    subscription.add(childSubscription);

    setTimeout(() => {
        // Unsubscribes both
        subscription.unsubscribe();
    }, 1000);

    return (
        <p>Subscription</p>
    );
}

export default Subscription;
