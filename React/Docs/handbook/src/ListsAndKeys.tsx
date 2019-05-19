
import React from 'react';
import './App.css';

function NumberList(props: { numbers: Array<number> }) {
    let listItems = props.numbers.map((number: number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(number => number * 2);

let element = (
    <div>
        <NumberList numbers={numbers} />
        <h1>{doubled}</h1>
    </div>
)

let ListsAndKeys: React.FC = () => {
    return (
        element
    );
}

export default ListsAndKeys;
