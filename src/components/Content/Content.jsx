import './content.css';
import Form from '../Form busqueda/FormBusqueda';
import Dropdown from './Secciones/DropDown/Dropdown';
import Navbarbtn from './Secciones/Navbarbtn/Navbarbtn';
import Homebtn from './Secciones/Homebtn/Homebtn';
import Linkbtn from './Secciones/Linkbtn/Linkbtn';
import Logobtn from './Secciones/Logobtn/Logobtn';
import CartWidget from './Secciones/CartWidget/CartWidget';
const Content = () => {
    return (
        <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Logobtn logo={"Music-deliver"}/>
                <Navbarbtn Inicio={"Inicio"}/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Homebtn/>
                        <Linkbtn Guitarras={"Guitarras"}/>
                        <Dropdown Marcas={"Marcas"}/>
                    </ul>
                    <CartWidget/>
                    <Form busqueda={"Buscar productos"}/>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Content;