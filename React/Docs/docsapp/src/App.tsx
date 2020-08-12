import React from "react";
import "./App.css";

type HelloProps = {
  name: string;
};

class HelloMessage extends React.Component<HelloProps> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

type TimerState = {
  seconds: number;
};
class Timer extends React.Component<{}, TimerState> {
  interval: any = null;

  constructor(props: any) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

type TodoListItem = {
  text: string;
  id: number;
};

type TodoAppState = {
  items: Array<TodoListItem>;
  text: string;
};
class TodoApp extends React.Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    let newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    this.setState((state: TodoAppState) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

type TodoListProps = {
  items: Array<TodoListItem>;
};
class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

function App() {
  return (
    <div>
      <HelloMessage name="there" />
      <Timer />
      <TodoApp />
    </div>
  );
}

export default App;
