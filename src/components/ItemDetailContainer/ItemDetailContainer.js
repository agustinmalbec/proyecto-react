import products from "../../products/products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function getProductsFromDatabase(prodId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let idFind = products.find((prod) => prod.id === Number(prodId))
            resolve(idFind);
        }, 1000);
    });
}

function ItemDetailContainer() {

    const param = useParams();
    const idProduct = param.idProduct;

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductsFromDatabase(idProduct).then((response) => {
            setProduct(response);
        });
    }, []);

    return (
        <div className="item-list">

            <div key={product.id} className="item-card">
                <h3>{product.title}</h3>
                <div className="item-img-container">
                    <img src={product.image} alt={product.title} className="item-img" />
                </div>
                <p></p>
                <p>Precio: ${product.price}</p>
                <button>Agregar al carrito</button>
            </div>

        </div>
    );
}

export default ItemDetailContainer;