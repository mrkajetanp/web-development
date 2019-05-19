
import React from 'react';
import './App.css';

function Mailbox(props: {unreadMessages: string[]}) {
    let unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

function LoginButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}

function UserGreeting(props: {}) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: {}) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props: { isLoggedIn: boolean }) {
    let isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

class LoginControl extends React.Component {
    state: { isLoggedIn: boolean };

    constructor(props: any) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;

        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                { button }
            </div>
        )
    }
}

let messages: string[] = ["React", "Re: React", "Re:Re: React"];
let messages2: string[] = ["React", "Re: React"];
let messages3: string[] = [];

function WarningBanner(props: { warn: boolean }) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    state: { showWarning: boolean };

    constructor(props: { warn: boolean }) {
        super(props);
        this.state = { showWarning: true };
    }

    handleToggleClick = () => {
        this.setState((state: { showWarning: boolean }) => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

let element = (
    <div>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Mailbox unreadMessages={messages2} />
        <Mailbox unreadMessages={messages3} />
        <Page />
    </div>
)

let ConditionalRendering: React.FC = () => {
    return (
        element
    );
}

export default ConditionalRendering;
