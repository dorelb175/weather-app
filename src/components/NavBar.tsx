import { Link } from "react-router-dom";

const NavBar = () => (
    <header>
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/favorites"> Favorites </Link>
        </nav>
    </header>
);

export default NavBar;