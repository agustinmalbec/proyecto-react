import { useContext } from 'react';
import cartContext from '../../context/cartContext';
import CartCheckout from './CartCheckout';
import './styles.scss';

function CartContainer() {

  const { cart, removeProduct,  getPriceInCart, clear } = useContext(cartContext);

  return (
    <div>
      <h2 className='title'>Carrito de compras</h2>
      <table className="cart-list">
        <thead>
          <tr className="cart-list-row">
            <th></th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cart-ist-row">
                <td>
                  <img height={80} src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.count}</td>
                <th>${item.price*item.count}</th>
                <td>
                  <button onClick={()=>removeProduct(item.id)}>Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='total'>
        <p>El total es de ${getPriceInCart()}</p>
      <CartCheckout total={getPriceInCart()} cart={cart} clear={clear} />
      </div>
    </div>
  )
}

export default CartContainer;