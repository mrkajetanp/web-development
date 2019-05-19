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

function formatName(user: {firstName: string, lastName: string}) {
    return user.firstName + ' ' + user.lastName;
}

// let element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you here!</h2>
//     </div>
// );

getGreeting(user)

function Welcome(props: { name: string }) {
    return <h1>Hello there, {props.name}</h1>;
}

const App: React.FC = () => {
  return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
  );
}

export default App;
