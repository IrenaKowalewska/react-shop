import { useContext } from 'react';
import { ShopContext } from '../context';
import { CartItem } from './CartItem';
function CartList() {
    const { order, 
        handleCartShow, 
        deleteFromCart,
        removeProductCount,
        addProductCount   
    } = useContext(ShopContext);
    const totalPrice = order.reduce((sum, nextEl) => {
        return sum + nextEl.finalPrice * nextEl.quantity;
    }, 0);
    return (
        <ul className="collection cart-list">
        <li className="collection-item active blue darken-2">
            Корзина заказов
            <span className="secondary-content delete-btn" onClick={handleCartShow}>
                <i className="material-icons">close</i>
            </span>
        </li>
        {
            order.length ? 
            order.map(item => <CartItem 
                                    key={item.mainId} 
                                    {...item} 
                                    deleteFromCart={deleteFromCart }
                                    removeProductCount={removeProductCount }
                                    addProductCount={addProductCount }
                                />) :
            <li className="collection-item center-align">В корзине нет заказов</li>
        }
        <li className="collection-item active blue darken-2 quantity-collection">
            Общая сумма заказа: {totalPrice} &#8381;
            <button className="btn send-btn blue darken-2" >
                    Отправить
                    <i className="material-icons">offline_pin</i>
            </button>
        </li>
      </ul>
    )
}

export { CartList}