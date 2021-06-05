import { useState, useEffect} from 'react';
import { API_KEY, API_URL} from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartShowed, setCartShowed]  = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = (item) => {
        const orderIndex = order.findIndex(elem => elem.mainId === item.mainId);

        if (orderIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((elem, index) => {
                if (index === orderIndex) {
                    return {
                        ...elem,
                        quantity: elem.quantity + 1
                    }
                } else {
                    return elem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    }

    const handleCartShow = () => {
        setCartShowed(!isCartShowed);
    }

    const deleteFromCart = (id) => {
        const itemIndex = order.findIndex(elem => elem.mainId === id);
        const beforeItem = order.slice(0, itemIndex);
        const afterItem = order.slice(itemIndex + 1);
        const newOrder = [...beforeItem, ...afterItem];
        setOrder(newOrder);
    }
    const removeProductCount = (id) => {
        const newOrder = order.map(elem => {
            if (elem.mainId  === id) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    }
    const addProductCount = (id) => {
        const newOrder = order.map(elem => {
            if (elem.mainId  === id) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity
                }
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    }
    const closeAlert = () => {
        setAlertName('');
    }
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        }) 
    }, []);
    return <main className="container content">
                <Cart 
                    order={order.length} 
                    handleCartShow={handleCartShow} 
                />
                {loading ? <Preloader /> : <GoodsList goods={goods}  addToCart={addToCart}/>}
                {isCartShowed && <CartList 
                                        order={order} 
                                        handleCartShow={handleCartShow}
                                        deleteFromCart={deleteFromCart}
                                        removeProductCount={removeProductCount}
                                        addProductCount={addProductCount}
                                    />}
                {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
            </main>
}

export { Shop };