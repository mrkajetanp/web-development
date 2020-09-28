import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class Hooks extends React.Component {
  render() {
    return (
      <>
        <h3>Hooks</h3>
        <Example />
      </>
    );
  }
}

export default Hooks;
