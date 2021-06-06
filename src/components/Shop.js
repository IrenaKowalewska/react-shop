import { useEffect, useContext} from 'react';
import { API_KEY, API_URL} from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
    const {goods, loading, alertName, isCartShowed, setGoods} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setGoods(data.shop);
        });
        // eslint-disable-next-line
    }, []);
    return <main className="container content">
                <Cart />
                {loading ? <Preloader /> : <GoodsList goods={goods} />}
                {isCartShowed && <CartList />}
                {alertName && <Alert />}
            </main>
}

export { Shop };