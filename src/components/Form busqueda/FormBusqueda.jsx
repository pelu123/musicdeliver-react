import React from 'react';

const Form = ({busqueda}) => {
    return (
        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder={busqueda} aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar producto</button>
                    </form>
    );
}

export default Form;