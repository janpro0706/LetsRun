import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            token: ''
        };
    }

    login(form) {
        if (form.id === 'janpro' && form.password === '1234') {
            this.setState({
                token: 'K23gf8e'
            });

            return true;
        }
        return false;
    }

    logout() {
        if (this.state.token !== '') {
            this.setState({
                token: ''
            });
            return true;
        }
        return false;
    }

    signup(form) {
        return true;
    }

    render() {
        // console.log('child props of App');
        // console.dir(this.props.children);

        const childrenWithService = React.Children.map(this.props.children, child => React.cloneElement(child, {
            token: this.state.token,
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
