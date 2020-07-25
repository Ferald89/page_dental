import React from 'react';

// Local
import Navbar from './Navbar';
import './styles/Navbar.css';
import Footer from './Footer';

function Layout(props){
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export default Layout;
