import React from 'react';
import './Navbar.css';
import LogoBtn from './LogoBtn/LogoBtn';
import InstrumentosBtn from './InstrumentosBtn/InstrumentosBtn';
import AudioBtn from './AudioBtn/AudioBtn';
import AccesoriosBtn from './AccesoriosBtn/AccesoriosBtn';
import CartWidget from './CartWidget/CartWidget';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <LogoBtn/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <InstrumentosBtn/>
                            <AudioBtn/>
                            <AccesoriosBtn/>
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </>
    );
}

export default Navbar;
