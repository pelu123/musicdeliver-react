import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Content from './Content/Content';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Carrito from './Carrito/Carrito';
import Producto from './Producto/Producto';
const App = () => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }
    return (
        <>
        <BrowserRouter>
            <Content/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/producto' element={<Producto/>}/>
                    <Route path='/carrito' element={<Carrito/>}/>
                    
                </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
