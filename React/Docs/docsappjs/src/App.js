import React from "react";
import { Remarkable } from "remarkable";
import "./App.css";

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

function App() {
  return (
    <div>
      <MarkdownEditor />
      <ErrorBoundary>
        <ContextApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
