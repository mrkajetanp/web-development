import React from 'react';
import logo from './logo.svg';
import './App.css';
import Observables from './components/Observables';
import Operators from './components/Operators';
import Subscription from './components/Subscription';
import Subjects from './components/Subjects';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Observables />
                <Operators />
                <Subscription />
                <Subjects />
            </header>
        </div>
  );
}

export default App;
