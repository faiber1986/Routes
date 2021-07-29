import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUsuario } from '../context/UserContext';

export const Nav = () => {

    const { login, setLogin } = useUsuario();

    const salir = () => {
        setLogin(false);
        sessionStorage.setItem('login', false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                            login ? 
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/root" activeClassName='active'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/index" activeClassName='active'>Admin</NavLink>
                                </li>
                                <li className="nav-item">
                                <button className="btn nav-link" onClick = {()=> salir()}>Salir</button>
                                </li>
                            </ul>:
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" activeClassName='active' exact>Iniciar Sesión</NavLink>
                                </li>
                                
                            </ul>
                        }
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}
