import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {

    const {totalProductsInCart} = useContext(cartContext);
    const count = totalProductsInCart()

    return (
        <div className="">
            <Link to="/Cart">
                <BsFillCartFill />
                <span>{count}</span>
            </Link>
        </div>
    );
}
export default CartWidget;