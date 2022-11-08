import {useState} from 'react';

const Instrumentos = () => {
    const  [productos, setProductos] = useState([]);
    const consultarBDD = async () => {
        fetch('/json/productos.json')
            .then(promise => promise.json())
            .then(productos => {
                const cardProductos = productos.map(prod =>
                    <div className="card" >
                        <div className="card-body">
                        <img src={`./img/${prod.img}`} className="card-img-top cardProducto" alt="..."  />
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Marca:{prod.marca}</p>
                            <p className="card-text">Modelo:{prod.modelo}</p>
                            <p className="card-text">Precio: ${prod.precio}</p>
                            <p className="card-text">Stock:{prod.stock}</p>
                        </div>
                    </div>
                    )
                    console.log(productos)
                    console.log(cardProductos)
                    setProductos(cardProductos)
            })
    }
    consultarBDD()



    return (
        <>
            {productos}
        </>
    );
}

export default Instrumentos;
