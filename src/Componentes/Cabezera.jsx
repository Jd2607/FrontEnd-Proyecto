import React from 'react'
import '../css/material-dashboard.css'

export function Cabezera(props){

    return(
        <>
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <h6 className="font-weight-bolder mb-0">{props.titulo}</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div style={{marginLeft: "auto"}}>
                        <ul className="navbar-nav  justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <a href="#/action-1" className="nav-link text-body font-weight-bold px-0">
                                    <i className="fa fa-user me-sm-1"></i>
                                    <span className="d-sm-inline d-none">Sign in</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}