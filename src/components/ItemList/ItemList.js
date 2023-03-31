import { Link } from 'react-router-dom';
import './styles.scss';


function ItemList({ prod }) {


    return (
        <div className="container">
            <div className="item-list">
                {prod.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.title} className="item-img" />
                        <div className="card-body">
                            <div className='card-title'>
                            <h3 >{item.title}</h3>
                            </div>
                            <div className='card-button'>
                            <Link to={`/item/${item.id}`}>
                                <button className='btn btn-outline-secondary'>Ver mas</button>
                            </Link>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;

