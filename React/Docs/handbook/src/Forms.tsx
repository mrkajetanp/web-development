
import React from 'react';
import './App.css';

class NameForm extends React.Component {
    state: {value: string };

    constructor(props: any) {
        super(props);
        this.state = { value: "" };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class EssayForm extends React.Component {
    state: {value: string };

    constructor(props: any) {
        super(props);
        this.state = {
            value: "Please write an essay."
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class FlavourForm extends React.Component {
    state: {value: string };

    constructor(props: any) {
        super(props);
        this.state = { value: "coconut" };
    }

    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert('Your favourite flavour is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

let element = (
    <div>
        <NameForm />
        <EssayForm />
        <FlavourForm />
    </div>
);

let Forms: React.FC = () => {
    return (
        element
    );
}

export default Forms;
