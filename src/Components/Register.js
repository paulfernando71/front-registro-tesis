import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import RegisterForm from './RegisterForm';

export default class Register extends Component {


    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn
        }
    }

    render() {

        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                <Sidebar content={RegisterForm} />
            </div>
        )

    }


}
