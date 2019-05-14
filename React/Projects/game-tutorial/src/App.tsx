import React from 'react';
// import logo from './logo.svg';
import './App.css';

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

function getGreeting(user: any) {
    if (user) {
        return <h1>Hello, { formatName(user) }!</h1>
    }

    return <h1>Hello, Stranger.</h1>
}

function formatName(user: any) {
    return user.firstName + ' ' + user.lastName;
}

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here!</h2>
    </div>
);

const App: React.FC = () => {
  return (
      element
  );
}

export default App;
