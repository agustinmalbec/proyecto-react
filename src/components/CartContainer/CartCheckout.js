import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/firestore';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function CartCheckout({ cart, total, clear }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  async function handleCheckout() {
    const orderData = {
      buyer: userData,
      items: cart,
      total: total,
      timestamp: new Date(),
    };

    const id = await createOrder(orderData);
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <strong>Gracias {userData.name}!</strong>,
      html: <i>Su orden es la numero: {id}</i>,
      icon: 'success'
    })
    navigate("/checkout");
    clear();

  }

  function handleChangeUserData(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  return (
    <div>
      <form className='container'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
          <input value={userData.name} name="name" type="text" className="form-control" required onChange={handleChangeUserData}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input value={userData.email} name="email" type="email" className="form-control" required onChange={handleChangeUserData}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Celular</label>
          <input value={userData.phone} name="phone" type="text" className="form-control" required onChange={handleChangeUserData}></input>
        </div>
      </form>
      <button onClick={clearForm}>Vaciar formulario</button>
      <button disabled={
        !(
          userData.name !== "" &&
          userData.phone !== "" &&
          userData.email !== ""
        )
      } onClick={handleCheckout}>Finalizar la compra</button>
    </div>
  )
}

export default CartCheckout;