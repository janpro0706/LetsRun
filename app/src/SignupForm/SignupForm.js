/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './SignupForm.css';

import { Button, Textfield } from 'react-mdl';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);


        this.state = {
            id: '',
            password: '',
            name: '',
            birth: '',
            gender: '',
            msg: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        const { id, password, name, birth, gender } = this.state;
        if (this.props.signup({ id, password, name, birth, gender })) {
            browserHistory.go(-2);
        } else {
            this.setState({ msg: 'signup failed' });
        }
    }

    onInput(e) {
        e.preventDefault();
        console.dir(e);
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <form style={{ position: 'absolute', top: 'calc(50% - 206px)' }}>
                    <Textfield label="ID" value={this.state.id} onChange={e => { this.setState({ id: e.target.value })}}></Textfield>
                    <Textfield label="PASSWORD" type="password" value={this.state.password} onChange={e => { this.setState({password: e.target.value })}}></Textfield>
                    <Textfield label="NAME" value={this.state.name} onChange={e => { this.setState({ name: e.target.value })}}></Textfield>
                    <Textfield label="BIRTH" value={this.state.birth} onChange={e => { this.setState({ birth: e.target.value })}}></Textfield>
                    <Textfield label="GENDER" value={this.state.gender} onChange={e => { this.setState({ gender: e.target.value })}}></Textfield>
                    <Button onClick={this.onSubmit} raised colored ripple>SIGN UP</Button>
                    <p style={{ color: 'red', textAlign: 'center' }}>{this.state.msg}</p>
                </form>
            </div>
        );

    }
}

SignupForm.contextTypes = {
    token: React.PropTypes.string
};

module.exports = SignupForm;