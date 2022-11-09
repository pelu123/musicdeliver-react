import { useState, useEffect } from 'react';


const Instrumentos = () => {

    const consultarBDD = async () => {
        fetch('/json/productos.json')
            .then(promise => promise.json())
            .then(productos => {
                const cardProductos = productos.map(prod =>
                    <div className="card" >
                        <div className="card-body">
                        <img src={`./img/${prod.img}`} className="card-img-top cardProducto" key={prod.id}/>
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Marca: {prod.marca}</p>
                            <p className="card-text">Modelo: {prod.modelo}</p>
                            <p className="card-text">Precio: ${prod.precio}</p>
                            <p className="card-text">Stock: {prod.stock}</p>
                            <button className='btn btn-dark'>Ver detalles</button>
                        </div>
                    </div>

                    )
console.log(cardProductos)
setProductos(cardProductos)
            })
    }

const [productos, setProductos] = useState([]);

useEffect(() => {
    consultarBDD()
}, []);




return (
    <>
        <div className='row'>
            {productos}
        </div>
    </>
);
}

export default Instrumentos;
