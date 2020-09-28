import React from "react";
import { Remarkable } from "remarkable";
import "./App.css";
import Hooks from "./Hooks";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
  }

  getRawMarkup = () => {
    return { __html: this.md.render("*test*") };
  };

  render() {
    return <div dangerouslySetInnerHTML={this.getRawMarkup()}></div>;
  }
}

const ThemeContext = React.createContext("light");

class Button extends React.Component {
  render() {
    return <p>Theme: {this.props.theme}</p>;
  }
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

class ThemedButton2 extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => <Button theme={value} />}
      </ThemeContext.Consumer>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
      <ThemedButton2 />
    </div>
  );
}

class ContextApp extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // logging shit here ...
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}

const TodoView = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));

@observer
class TodoListView extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const store = new TodoList();
const todo1 = new Todo();
todo1.title = "Get Coffee";

const todo2 = new Todo();
todo2.title = "Write code";

store.todos.push(todo1, todo2);

class MobXApp extends React.Component {
  render() {
    return <TodoListView todoList={store} />;
  }
}

function App() {
  return (
    <>
      <Hooks />
      <MarkdownEditor />
      <ErrorBoundary>
        <ContextApp />
      </ErrorBoundary>
      <MobXApp />
    </>
  );
}

export default App;
