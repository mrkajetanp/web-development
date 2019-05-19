
import React from 'react';
import './App.css';

class Clock extends React.Component {
    state: { date: Date };
    timerID: NodeJS.Timeout;

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
        this.timerID = setInterval(() => {}, 0);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment
        // }));

        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

let element = (
    <Clock />
);

const StateAndLifecycle: React.FC = () => {
  return (
      element
  );
}

export default StateAndLifecycle;
