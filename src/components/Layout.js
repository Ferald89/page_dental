import React from 'react';

// Local
import Navbar from './Navbar';

function Layout(props){
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;
