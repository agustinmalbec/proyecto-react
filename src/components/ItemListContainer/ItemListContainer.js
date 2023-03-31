import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsFromDatabase, getProductsFromDatabaseByCategory } from '../../services/firestore'

function ItemListContainer({ greeting }) {

    const param = useParams();
    const idCategory = param.idCategory;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    async function readProducts() {
        if (idCategory === undefined) {
            let response = await getProductsFromDatabase();
            setProducts(response);
            setLoading(false)
        } else {
            let response = await getProductsFromDatabaseByCategory(idCategory);
            setProducts(response);
            setLoading(false)
        }
    }

    useEffect(() => {
        readProducts();
        // eslint-disable-next-line
    }, [idCategory]);
    
    return (
        <>
            <p>{greeting}</p>
            {
                loading
                ?<p>Cargando...</p>
                :<ItemList prod={products} />
            }
            
        </>
    );
}
export default ItemListContainer;

