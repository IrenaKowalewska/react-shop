import { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
    const { order, handleCartShow } = useContext(ShopContext);

    return <div 
                className="cart blue darken-2 white-text" 
                onClick={handleCartShow}
            >
                <i className="material-icons">shopping_cart</i>
                {order ? <span className="cart-quantity">{order.length}</span> : null}
            </div>
}

export { Cart };