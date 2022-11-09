import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link className="header-logo" to="/">
            <button>Music-deliver</button>
        </Link>
    );
}

export default HeaderLogo;
