import React from 'react';
import './App.css';
import NavBar from './components/navbar';

const logo = require("./logo.svg");

function App() {
  return (
    <div>
      <NavBar
        totalCounters={4}
      />
    </div>
  );
}

export default App;
