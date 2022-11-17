import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const HeaderNav = () => {
    return (
        <nav>
                <Link className="nav" to="/">
                    <button>Instrumentos</button>
                    <button>Audio</button>
                    <button>Accesorios</button>
                </Link>
                <CartWidget/>
            </nav>
    );
}

export default HeaderNav;
