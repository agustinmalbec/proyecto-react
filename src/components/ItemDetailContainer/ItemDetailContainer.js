import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import './styles.scss';
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../context/cartContext";
import { getProductFromDatabase } from '../../services/firestore';

function ItemDetailContainer() {

    const param = useParams();
    const idProduct = param.idProduct;

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductFromDatabase(idProduct).then((response) => {
            setProduct(response);
        });
        // eslint-disable-next-line
    }, []);

    const {addProduct} = useContext(cartContext);

    function onAddToCart(count){
        addProduct(product, count);
    }

    return (
        <div className="item-list container">

            <div key={product.id} className="item-card">
                <div className="item-img-container">
                    <img src={product.image} alt={product.title} className="item-img" />
                </div>
                <h3 className="item-title">{product.title}</h3>
                <p>{product.description}</p>
                <p className="item-price">Precio: ${product.price}</p>
                <ItemCount initial={1} stock={10} onAddToCart={onAddToCart}/>
            </div>

        </div>
    );
}

export default ItemDetailContainer;