import { useContext } from 'react';
import { ShopContext } from '../context';
function CartItem(props) {
    const { 
        mainId, 
        displayName, 
        finalPrice, 
        quantity,    
    } = props;
    const { deleteFromCart, removeProductCount, addProductCount } = useContext(ShopContext);
    return <li className="collection-item"> 
                {displayName} × {quantity} =  {finalPrice * quantity} &#8381;, price: {finalPrice} &#8381;
                <span 
                    className="secondary-content delete-btn blue-text" 
                    onClick={() => deleteFromCart(mainId)}
                >
                    <i className="material-icons">delete_forever</i>
                </span>
                <span 
                    className="secondary-content delete-btn blue-text" 
                    onClick={() => removeProductCount(mainId)}
                >
                    <i className="material-icons">remove</i>
                </span>
                <span 
                    className="secondary-content delete-btn blue-text" 
                    onClick={() => addProductCount(mainId)}
                >
                    <i className="material-icons">add</i>
                </span>
            </li>
}

export { CartItem };