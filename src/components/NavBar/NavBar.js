import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './styles.scss';



function NavBar() {
    return (
        <div className="navBar">
            <Link to="/">
                <h1 className="navBrand">Electro Shop</h1>
            </Link>

            <nav>
                <ul className="navList">
                    <Link to="/category/Monitor">
                        <li>Monitores</li>
                    </Link>
                    <Link to="/category/Teclado">
                        <li>Teclados</li>
                    </Link>
                    <Link to="category/Mouse">
                        <li>Mouses</li>
                    </Link>
                    <Link to="/category/MousePad">
                        <li>MousePads</li>
                    </Link>
                </ul>
            </nav>

            {CartWidget()}

        </div>
    );
}
export default NavBar;