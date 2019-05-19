
import React from 'react';
import './App.css';

function FancyBorder(props: any) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting!
            </p>
        </FancyBorder>
    );
}

let element = (
    <WelcomeDialog />
);

let CompositionVsInheritance: React.FC = () => {
    return (
        element
    );
}

export default CompositionVsInheritance;
