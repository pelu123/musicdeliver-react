import './App.css';
import Content from './Content/Content';
import ItemCount from './ItemCount/ItemCount';
import Instrumentos from './Instrumentos/Instrumentos';
const App = () => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }
    return (
        <>
        <Content/>
        <Instrumentos/>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
    );
}

export default App;
