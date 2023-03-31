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
                        <li className='navListItem'>Monitores</li>
                    </Link>
                    <Link to="/category/Teclado">
                        <li className='navListItem'>Teclados</li>
                    </Link>
                    <Link to="/category/Mouse">
                        <li className='navListItem'>Mouses</li>
                    </Link>
                    <Link to="/category/MousePad">
                        <li className='navListItem'>MousePads</li>
                    </Link>
                </ul>
            </nav>

            {CartWidget()}

        </div>
    );
}
export default NavBar;