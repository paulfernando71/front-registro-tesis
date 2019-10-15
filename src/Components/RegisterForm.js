import React, { Component } from 'react'

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            programaEstudios: "Maestria en Ingenieria de Sistemas e Informatica con Mencion en Ingenieria de Software",
            codigoAlumno: "",
            cursoTesis: "Metodologia de tesis",
            condicionSocial: "",
            numDocumentoAlumno: "",
            nombresAlumno: "",
            numCelularAlumno: "",
            numCelularAlumnoAlt: "",
            numTelefonoAlumno: "",
            correoAlumno: "",
            correoUnmsmAlumno: ""
        }
    }

    render() {
        return (
            <div>
                <h4 className="text-center text-uppercase font-weight-bold">Formulario de registro de tesis</h4>
                <form className={`m-4 ${this.state.step === 1 ? '' : 'd-none'}`} onSubmit={this.firstSubmit}>
                    <div className="form-group">
                        <label className="font-weight-bold">Programa de estudios</label>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="programaEstudios" className="custom-control-input" required value="Maestria en Ingenieria de Sistemas e Informatica con Mencion en Ingenieria de Software" checked={this.state.programaEstudios === "Maestria en Ingenieria de Sistemas e Informatica con Mencion en Ingenieria de Software"} onChange={this.handleOptionChange} />
                            <label className="custom-control-label" htmlFor="customRadio1">Maestria en Ingenieria de Sistemas e Informatica con Mencion en Ingenieria de Software</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="programaEstudios" className="custom-control-input" required value="Maestria en Ingenieria de Sistemas e Informatica con Mencion en Tecnologias de Informacion y Comunicaciones" checked={this.state.programaEstudios === "Maestria en Ingenieria de Sistemas e Informatica con Mencion en Tecnologias de Informacion y Comunicaciones"} onChange={this.handleOptionChange} />
                            <label className="custom-control-label" htmlFor="customRadio2">Maestria en Ingenieria de Sistemas e Informatica con Mencion en Tecnologias de Informacion y Comunicaciones</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio3" name="programaEstudios" className="custom-control-input" required value="Maestria Profesional en Gobierno de Tecnologias de Informacion" checked={this.state.programaEstudios === "Maestria Profesional en Gobierno de Tecnologias de Informacion"} onChange={this.handleOptionChange} />
                            <label className="custom-control-label" htmlFor="customRadio3">Maestria Profesional en Gobierno de Tecnologias de Informacion</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio4" name="programaEstudios" className="custom-control-input" required value="Maestria Profesional en Gestion de Informacion y Conocimiento" checked={this.state.programaEstudios === "Maestria Profesional en Gestion de Informacion y Conocimiento"} onChange={this.handleOptionChange} />
                            <label className="custom-control-label" htmlFor="customRadio4">Maestria Profesional en Gestion de Informacion y Conocimiento</label>
                        </div>
                        {/* <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio5" name="program" className="custom-control-input" required value="" checked={this.state.program === ''} onChange={this.handleOptionChange} />
                            <label className="custom-control-label" htmlFor="customRadio5">Otro</label>
                            <input type="text" name="program" className="form-control mt-1" placeholder="Especifique" onChange={this.handleOptionChange} required/>
                        </div> */}
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupCode">Codigo de estudiante</label>
                        <input type="text" className="form-control" id="formGroupCode" name="codigoAlumno" placeholder="Su codigo" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Condicion actual</label>
                        <select className="custom-select" required onChange={this.handleOptionChange} name="condicionSocial" value={this.state.condicionSocial}>
                            <option value="">Seleccione una opcion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Nombre del curso de tesis que estudia actualmente</label>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio6" name="cursoTesis" className="custom-control-input" required value="Metodologia de tesis" checked={this.state.cursoTesis === "Metodologia de tesis"} onChange={this.handleOptionChange}/>
                            <label className="custom-control-label" htmlFor="customRadio6">Metodologia de tesis</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio7" name="cursoTesis" className="custom-control-input" required value="Seminario de tesis I" checked={this.state.cursoTesis === "Seminario de tesis I"} onChange={this.handleOptionChange}/>
                            <label className="custom-control-label" htmlFor="customRadio7">Seminario de tesis I</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio8" name="cursoTesis" className="custom-control-input" required value="Seminario de tesis II" checked={this.state.cursoTesis === "Seminario de tesis II"} onChange={this.handleOptionChange}/>
                            <label className="custom-control-label" htmlFor="customRadio8">Seminario de tesis II</label>
                        </div>
                        {/* <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio9" name="custom2" className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="customRadio9">Otro</label>
                            <input type="text" className="form-control mt-1" placeholder="Especifique" />
                        </div> */}
                    </div>
                    <div className="text-right mt-4">
                        <button type="submit" className="btn btn-primary px-5">Siguiente</button>
                    </div>
                </form>

                <form className={`m-4 ${this.state.step === 2 ? '' : 'd-none'}`} onSubmit={this.secondSubmit}>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupDni">Numero de documento de identidad</label>
                        <input type="text" className="form-control" id="formGroupDni" name="numDocumentoAlumno" placeholder="Su numero de identidad" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupName">Apellidos y Nombres</label>
                        <input type="text" className="form-control" id="formGroupName" name="nombresAlumno" placeholder="Su nombre completo" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupMobile">Numero de celular</label>
                        <input type="text" className="form-control" id="formGroupMobile" name="numCelularAlumno"placeholder="Su numero de celular" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupMobileAlt">Numero de celular alternativo</label>
                        <input type="text" className="form-control" id="formGroupMobileAlt" name="numCelularAlumnoAlt" placeholder="Su numero de celular alternativo" onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupPhone">Telefono fijo</label>
                        <input type="text" className="form-control" id="formGroupPhone" name="numTelefonoAlumno" placeholder="Su numero de telefono" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupEmail">Correo electronico personal</label>
                        <input type="text" className="form-control" id="formGroupEmail" name="correoAlumno" placeholder="Su correo electronico" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupEmailUnmsm">Correo electronico en el dominio unmsm.edu.pe</label>
                        <input type="text" className="form-control" id="formGroupEmailUnmsm" name="correoUnmsmAlumno" placeholder="Su correo electronico unmsm" required onChange={this.handleOptionChange}/>
                    </div>
                    <div className="text-right d-flex justify-content-between mt-4">
                        <button type="button" className="btn btn-primary px-5" onClick={this.prevStep}>Atrás</button>
                        <button type="submit" className="btn btn-primary px-5">Siguiente</button>
                    </div>
                </form>

                <form className={`m-4 ${this.state.step === 3 ? '' : 'd-none'}`} onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupDni">Titulo</label>
                        <input type="text" className="form-control" id="formGroupDni" placeholder="Su titulo" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupWord1">Palabra clave n°1</label>
                        <input type="text" className="form-control" id="formGroupWord1" placeholder="Su palabra clave" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupWord2">Palabra clave n°2</label>
                        <input type="text" className="form-control" id="formGroupWord2" placeholder="Su palabra clave" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupWord3">Palabra clave n°3</label>
                        <input type="text" className="form-control" id="formGroupWord3" placeholder="Su palabra clave" />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupSituation">Situacion problematica</label>
                        <input type="text" className="form-control" id="formGroupSituation" placeholder="Su situacion problematica" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupInvestigation">Problema de investigacion</label>
                        <input type="text" className="form-control" id="formGroupInvestigation" placeholder="Su problema de investigacion" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupJustification">Justificacion de la investigacion</label>
                        <input type="text" className="form-control" id="formGroupJustification" placeholder="Su justificacion" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupResponsibilitySocial">¿De que manera considera usted que su tema de tesis presenta impacto de responsabilidad social</label>
                        <input type="text" className="form-control" id="formGroupResponsibilitySocial" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupImpactEnvironmental">¿De que manera considera usted que su tema de tesis presenta impacto ambiental?</label>
                        <input type="text" className="form-control" id="formGroupImpactEnvironmental" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupTeacher">Apellidos y Nombres del ultimo Docente del Curso de Tesis(Metodologia, Seminario, Lineas de investigacion)</label>
                        <input type="text" className="form-control" id="formGroupTeacher" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupAdviserName">Apellidos y Nombres del Asesor de Tesis</label>
                        <input type="text" className="form-control" id="formGroupAdviserName" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupAdviserEmail">Correo electronico de su Asesor de Tesis</label>
                        <input type="text" className="form-control" id="formGroupAdviserEmail" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupAdviserMobile">Numero de celular de su Asesor de Tesis</label>
                        <input type="text" className="form-control" id="formGroupAdviserMobile" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupDate">Si usted ya sustento la Tesis, ¿Cual fue la fecha de sustentacion?</label>
                        <input type="text" className="form-control" id="formGroupDate" placeholder="Su respuesta" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="formGroupDocument">Alojar el documento de Tema de Tesis, Proyecto de Tesis o Tesis de Grado</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFileLang" lang="es" />
                            <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
                        </div>
                    </div>
                    <div className="text-right d-flex justify-content-between mt-4">
                        <button type="button" className="btn btn-primary px-5" onClick={this.prevStep}>Atrás</button>
                        <button type="submit" className="btn btn-primary px-5">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }

    nextStep = () => {
        let { step } = this.state;
        step++;
        this.setState({
            step
        });
    }

    prevStep = () => {
        let { step } = this.state;
        step--;
        this.setState({
            step
        });
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('asdadasd');
        this.nextStep();
    }

    firstSubmit = e => {
        e.preventDefault();
        if (this.state.program === 'Otro') {
            
        }
        this.nextStep();
    }

    secondSubmit = e => {
        e.preventDefault();
        this.nextStep();
    }

    handleOptionChange = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

}
