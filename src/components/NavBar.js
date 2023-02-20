import CartWidget from './CartWidget'

const categorias = ['Parlantes', 'Teclados', 'Mouses', 'Auriculares', 'Mousepads']

function NavBar() {
    return (
        <div className="navBar">
            <div>
                <h1 className="brand">Electro Shop</h1>
            </div>
            <nav>
                <ul className="navList">
                    {categorias.map((item) => (
                        <li className="navItem"><a href="@">{item}</a></li>
                    ))}
                </ul>
            </nav>
            <div>
            {CartWidget()}
            </div>
        </div>
    );
}
export default NavBar;