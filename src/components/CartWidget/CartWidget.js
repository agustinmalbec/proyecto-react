import { BsFillCartFill } from "react-icons/bs";
import React, { useState } from "react";


function CartWidget() {

    const [num, setNum] = useState(0);

    return (
        <div className="">
            <a href="#">
                <BsFillCartFill />
                <span>{num}</span>
                <button onClick={() => setNum(num + 1)}>incrementar</button>
            </a>
        </div>
    );
}
export default CartWidget;