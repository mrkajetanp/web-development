
import React from 'react';
import './App.css';

function BoilingVerdict(props: { celsius: number }) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

let scaleNames: { [key: string]: string } = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    state: { temperature: "" };
    props: { scale: string };

    constructor(props: { scale: string }) {
        super(props);
        this.props = { scale: 'c' };
        this.state = { temperature: "" };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({temperature: e.target.value});
    }

    render() {
        let temperature = this.state.temperature;
        let scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (n: number) => number) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    state: { scale: string, temperature: string };

    constructor(props: any) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature: number) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature: number) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
          <div>
            <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />

            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />

            <BoilingVerdict
              celsius={parseFloat(celsius)} />

          </div>
      );
    }
}

let element = (
    <Calculator />
);

let LiftingStateUp: React.FC = () => {
    return (
        element
    );
}

export default LiftingStateUp;
