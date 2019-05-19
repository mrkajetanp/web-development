
import React from 'react';
import './App.css';

function ActionLink() {
    function handleClick(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log("The link was clicked");
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

// Function binding syntax
class Toggle extends React.Component {
    state: { isToggleOn: boolean };

    constructor(props: any) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state: { isToggleOn: boolean }) => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

// Public class fields syntax
class LoggingButton extends React.Component {
    handleClick = () => {
        console.log("this is:", this);
    }

    handleClickArgument = (arg: string) => {
        console.log("argument: ", arg);
    }

    render() {
        return (
            // Event with an argument
            // <button onClick={(e) => this.handleClickArgument("test", e)}>
            // <button onClick={this.handleClickArgument.bind(this, "test")}>
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

let element = (
    <div>
        <ActionLink />
        <Toggle />
        <LoggingButton />
    </div>
)

let HandlingEvents: React.FC = () => {
    return (
        element
    );
}

export default HandlingEvents;
