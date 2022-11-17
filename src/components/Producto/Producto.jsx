import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  {consultarBDD} from '../ItemListContainer/ItemListContainer';
const Producto = () => {
    
    
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBDD().then(producto => console.log(producto))
        
    }, []);




    return (
        <div>
            <h1>Producto</h1>
        </div>
    );
}

export default Producto;






