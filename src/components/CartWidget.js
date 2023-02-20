import { BsFillCartFill } from "react-icons/bs";



function CartWidget() {
    let num = 0;
    return (
        <div className="">
            <a href="@">
                <BsFillCartFill/>
                <span>{ num }</span>
            </a>
        </div>
    )
}
export default CartWidget;