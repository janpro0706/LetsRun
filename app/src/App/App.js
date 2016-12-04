import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    globalContext = {
        token: ''
    };

    getChildContext() {
        return this.globalContext;
    }

    login(info) {
        // console.log(this);
        this.globalContext.token = 'K23gf8e';
    }

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        // console.log('child props of App');
        // console.dir(this.props.children);

        const loginChildren = React.Children.map(this.props.children, child => React.cloneElement(child, {
            login: this.login
        }));

        return (
            <div className="App">
                { loginChildren }
            </div>
        );
    }
}

App.childContextTypes = {
    token: React.PropTypes.string
};

export default App;
