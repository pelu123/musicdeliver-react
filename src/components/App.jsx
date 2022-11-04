import './App.css';
import Content from './Content/Content';
import ItemCount from './ItemCount/ItemCount';
const App = () => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }
    return (
        <>
        <Content/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    );
}

export default App;
