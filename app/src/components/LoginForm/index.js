/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './LoginForm.css';

import { Button, Textfield } from 'react-mdl';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);

        this.state = {
            id: '',
            password: '',
            msg: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        const id = this.state.id;
        const password = this.state.password;
        if (this.props.login({ id, password })) {
            browserHistory.replace('/');

        } else {
            this.setState({ msg: 'login failed' });
        }
    }

    onInput(e) {
        e.preventDefault();
        console.dir(e);
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <form style={{ textAlign: 'center', position: 'absolute', top: 'calc(50% - 90px)' }}>
                    <Textfield label="ID" value={this.state.id} onChange={e => { this.setState({ id: e.target.value })}}></Textfield>
                    <Textfield label="PASSWORD" type="password" value={this.state.password} onChange={e => { this.setState({password: e.target.value })}}></Textfield>
                    <br />
                    <div style={{ display: 'inline-block', width: '300px' }}>
                        <Button onClick={this.onSubmit} raised colored ripple style={{ width: '100%', marginBottom: '10px' }}>LOGIN</Button>
                        <Button onClick={() => { browserHistory.push('/signup') }} raised colored ripple primary style={{ width: '100%' }}>SIGN UP</Button>
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{this.state.msg}</p>
                </form>
            </div>
        );

    }
}

LoginForm.contextTypes = {
    token: React.PropTypes.string
};

module.exports = LoginForm;