import React, { Component } from 'react'

import { Redirect } from 'react-router-dom';


export default class Login extends Component {

    constructor(props) {
        const token = localStorage.getItem('token');
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }
        super(props);
        this.state = {
            code: '',
            loggedIn
        };
    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to="/register" />
        }

        return (
            <div className="vh-100 bg-light text-dark text-center">
                <div>
                    <h4 className="text-light bg-dark text-center py-3 mb-0">Módulo de registro de tesis</h4>
                </div>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md"></div>
                        <div className="col-md">
                            <div>
                                <i className="far fa-user fa-3x rounded rounded-circle p-3"></i>
                                <h5>Acceso al módulo</h5>
                                <form onSubmit={this.onSubmit} className="m-auto p-4 rounded">
                                    <div className="form-group">
                                        <input onChange={this.onChange} value={this.state.code} className="form-control text-center rounded-pill" placeholder="Código" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 rounded-pill">
                                        <i className="fas fa-sign-in-alt"></i>&nbsp;
                                        Ingresar
                                </button>
                                </form>
                                <small className="text-muted">UPG-FISI &copy; 2019</small>
                            </div>
                        </div>
                        <div className="col-md"></div>
                    </div>
                </div>
            </div>
        )
    }

    onSubmit = e => {
        e.preventDefault();
        const { code } = this.state;
        //aca hacemos el login
        if (code === '12345') {
            localStorage.setItem('token', '12345');
            this.setState({
                loggedIn: true
            })
        }
    }

    onChange = e => {
        console.log(e.target.value);
        this.setState({
            code: e.target.value
        });
    }

}
