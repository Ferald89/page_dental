import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fuild">
                    <Link to="/" className="Navbar__brand">
                        <span className="font-weight-light">Den</span>
                        <span className="font-weight-bold">tal</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
