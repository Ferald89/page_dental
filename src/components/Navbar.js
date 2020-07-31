import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar row">
                <div className="container-fuild col Navbar_logo">
                    <Link to="/" className="Navbar__brand">
                        <span className="font-weight-light logo">Den</span>
                        <span className="font-weight-bold logo">tal</span>
                    </Link>
                </div>
            <div className="col-sm- Navbar_horario">
                horario
            </div>
            <div className="col-sm- Navbar_horario">
                horario
            </div>
            <div className="col-sm- Navbar_horario">
                horario
            </div>
            </div>
        );
    }
}

export default Navbar;
