import './content.css';
import HeaderLogo from './Secciones/HeaderTitulo/HeaderLogo';
import HeaderNav from './Secciones/HeaderNav/HeaderNav';

const Content = () => {
    return (
        <header className="contenedor header">
            <HeaderLogo />
            <HeaderNav/>
        </header>
    );
}

export default Content;