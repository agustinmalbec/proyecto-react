import products from "../../products/products";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function getProductsFromDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

function getProductsFromDatabaseByCategory(idCat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let prodFilter = products.filter((item) => item.category === idCat);
            resolve(prodFilter);
        }, 1000);
    });
}

function ItemListContainer({ greeting }) {

    const param = useParams();
    const idCategory = param.idCategory;

    const [products, setProducts] = useState([]);


    async function readProducts() {
        if (idCategory === undefined) {
            let response = await getProductsFromDatabase();
            setProducts(response);
        } else {
            let response = await getProductsFromDatabaseByCategory(idCategory);
            setProducts(response);
        }
    }

    useEffect(() => {
        readProducts();
    }, [idCategory]);
    return (
        <>
            <p>{greeting}</p>
            <ItemList prod={products} />
        </>
    );
}
export default ItemListContainer;

