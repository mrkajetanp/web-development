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

function App() {
  return (
    <div>
      <MarkdownEditor />
    </div>
  );
}

export default App;
