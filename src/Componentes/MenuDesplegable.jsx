import React from 'react'
import '../css/material-dashboard.css'
import {Dropdown} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWrench,faTruckRampBox,faListCheck,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';


export function MenuDesplegable(props){

    const menu = document.getElementById("sidenav-main")

    if (props.mostrar){
        menu.style.display = props.mostrar
    } 

    return(
    <>
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                    <span className="ms-1 font-weight-bold text-white" style={{fontSize: "19px"}} >Control de despachos</span>
                </a>
            </div>

            <hr className="horizontal light mt-0 mb-2" />

            <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <div className="row" id="seleccionar1">
                        <li className="nav-item"> 
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-button-drop-down" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                <FontAwesomeIcon icon={faTruckRampBox} style={{fontSize:"20px"}} /> Ordenes de despacho
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/orden/generar">Generar Orden</Dropdown.Item>
                                    <Dropdown.Item href="/orden/historial">Historial de Ordenes</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </div>

                    <div className="row" id="seleccionar2">
                        <li className="nav-item"> 
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-button" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                    <FontAwesomeIcon icon={faListCheck} style={{fontSize:"20px"}} /> Control de ordenes
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/orden/pendientes">Ordenes pendiente</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </div>

                    <div className="row" id="seleccionar3">
                        <li className="nav-item"> 
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                    <FontAwesomeIcon icon={faWrench} style={{fontSize:"20px"}} /> Administrador
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/usuario/crear">Crear usuario(s)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </div>

                    <div className="row" id="seleccionar4"> 
                        <li className="nav-item" style={{width: "250px"}}> 
                        <button type="button" variant="none" id="cerrar-sesion">
                            <FontAwesomeIcon icon={faRightFromBracket} style={{fontSize:"20px"}} /> Cerrar sesion
                        </button>
                        </li>
                    </div>
                </ul>
            </div>
    </>
    )
}