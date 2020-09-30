import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

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
