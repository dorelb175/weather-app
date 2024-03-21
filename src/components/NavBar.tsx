import { Link } from "react-router-dom";

const NavBar = () => (
    <header className='p-5 text-2xl'>
        <nav className='text-gray-100 font-semibold m-1 p-2'>
            <Link to="/"> Home </Link>
            <Link to="/favorites"> Favorites </Link>
        </nav>
    </header>
);

export default NavBar;