import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThesisTable from './ThesisTable';


export default class Thesis extends Component {

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
                <Sidebar content={ThesisTable} />
            </div>
        )

    }
}