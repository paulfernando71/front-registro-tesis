import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Imagen from '../fisi.jpg';

export default class Sidebar extends Component {

    constructor(props) {
        let isExpanded = true;
        super(props);
        this.state = {
            isExpanded
        };
    }

    render() {
        return (
            <div className={`d-flex ${this.state.isExpanded ? '' : 'toggled'}`} id="wrapper">
                <div className="bg-dark text-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center">
                        <Link to="/register" className="text-white font-weight-bold font-italic text-decoration-none">Registro de tesis</Link>
                    </div>
                    <div className="list-group list-group-flush">
                        <Link to="/register" className="list-group-item list-group-item-action bg-dark text-white font-weight-bold">
                            <i className="fas fa-book"></i>&nbsp;
                            Registrar
                        </Link>
                        {/* <Link to="/update" className="list-group-item list-group-item-action bg-dark text-white font-weight-bold">
                            <i className="far fa-edit"></i>&nbsp;
                            Actualizar
                        </Link> */}
                        <Link to="/thesis" className="list-group-item list-group-item-action bg-dark text-white font-weight-bold">
                            <i className="far fa-edit"></i>&nbsp;
                            Tesis registradas
                        </Link>
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                        <button onClick={this.toggled} className='btn btn-dark rounded-circle' id="menu-toggle">
                            <i className="fas fa-bars"></i>
                        </button>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link font-weight-bold" onClick={this.onClick} to="/login">
                                        <i className="far fa-user"></i>&nbsp;
                                            Cerrar sesión
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="text-dark">
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <this.props.content />
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            {/* <img src={Imagen} alt="asdsa" /> */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onClick = () => {
        localStorage.removeItem('token');
    }

    toggled = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

}
