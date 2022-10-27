import React from 'react';

const Dropdown = ({Marcas}) => {
    return (
        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {Marcas}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Fender</a></li>
                                <li><a className="dropdown-item" href="#">Gibson</a></li>
                                
                            </ul>
                        </li>
    );
}

export default Dropdown;