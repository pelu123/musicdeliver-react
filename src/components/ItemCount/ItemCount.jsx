import {useState} from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const modificarContador = (operacion) =>{
        if(operacion === "+"){
            if(contador < 10)
            setContador(contador + 1)
        }else{
            if(contador > 1)
            setContador(contador - 1)
        }
        
    }
    const onAdd = (contador) => {
        console.log(`Agregaste ${contador} unidades al carrito`);
    }

    return (
        <div className='contador-container'>
            <button onClick={()=> modificarContador("+")} className='btn btn-mas'>+</button>
            {contador}
            <button onClick={()=> modificarContador("-")} className='btn btn-menos'>-</button>
            <div>
                <button onClick={()=>onAdd(contador)} className='btn ag-carrito'>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;

/**<Route path='/ItemCount' element={<ItemCount initial={1} stock={10} onAdd={onAdd}/>}/> */