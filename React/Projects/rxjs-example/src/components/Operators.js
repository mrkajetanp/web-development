import React from 'react';
import { of } from 'rxjs';
import { map, first } from 'rxjs/operators';

function Operators() {
    console.log('** Operators **');

    map(x => x*x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
    first()(of(8, 9, 10)).subscribe((v) => console.log(`value: ${v}`));

    return (
        <div>
            <p>Operators</p>
        </div>
    );
}

export default Operators;
