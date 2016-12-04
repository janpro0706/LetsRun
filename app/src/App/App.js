import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    globalContext = {
        token: ''
    };

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.signup = this.signup.bind(this);
    }

    getChildContext() {
        console.log('get child context');
        return this.globalContext;
    }

    login(form) {
        if (form.id === 'janpro' && form.password === '1234') {
            this.globalContext.token = 'K23gf8e';

            return true;
        }
        return false;
    }

    logout() {
        if (this.globalContext.token !== '') {
            console.log(this.globalContext.token);
            this.globalContext.token = '';
            console.log(this.globalContext.token);
        }
    }

    signup(form) {
        return true;
    }

    render() {
        // console.log('child props of App');
        // console.dir(this.props.children);

        const childrenWithService = React.Children.map(this.props.children, child => React.cloneElement(child, {
            login: this.login,
            logout: this.logout,
            signup: this.signup
        }));

        return (
            <div className="App">
                { childrenWithService }
            </div>
        );
    }
}

App.childContextTypes = {
    token: React.PropTypes.string
};

export default App;
