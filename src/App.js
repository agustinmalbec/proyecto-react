import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"PRODUCTOS"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"PRODUCTOS"} />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<h3>Gracias por su compra!</h3>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
