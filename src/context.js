import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialSate = {
    goods: [],
    order: [],
    loading: true,
    isCartShowed: false,
    alertName: '',
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialSate);
    
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    };
    value.deleteFromCart = (itemId) => {
        dispatch({type: 'DELETE_FROM_CART', payload: { id: itemId}});
    };

    value.addProductCount = (itemId) => {
        dispatch({type: 'ADD_PRODUCT_COUNT', payload: { id: itemId}});
    };

    value.removeProductCount = (itemId) => {
        dispatch({type: 'REMOVE_PRODUCT_COUNT', payload: { id: itemId}});
    };

    value.handleCartShow = () => {
        dispatch({type: 'HANDLE_CART_SHOW'});
    };

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}