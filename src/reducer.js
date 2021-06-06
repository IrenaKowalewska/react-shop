export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS': 
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'HANDLE_CART_SHOW':
            return {
                ...state,
                isCartShowed: !state.isCartShowed
            };
        case 'ADD_TO_CART': {
            const orderIndex = state.order.findIndex(elem => elem.mainId === payload.mainId);
            let newOrder = null;
            if (orderIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((elem, index) => {
                    if (index === orderIndex) {
                        return {
                            ...elem,
                            quantity: elem.quantity + 1
                        }
                    } else {
                        return elem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        };
        case 'REMOVE_PRODUCT_COUNT': 
            return {
                ...state,
                order: state.order.map(elem => {
                    if (elem.mainId  === payload.id) {
                        const newQuantity = elem.quantity - 1;
                        return {
                            ...elem,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return elem;
                    }
                }),
            };
        case 'ADD_PRODUCT_COUNT':
            return {
                ...state,
                order: state.order.map(elem => {
                    if (elem.mainId  === payload.id) {
                        const newQuantity = elem.quantity + 1;
                        return {
                            ...elem,
                            quantity: newQuantity
                        }
                    } else {
                        return elem;
                    }
                }),
            };
        case 'DELETE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(elem => elem.mainId !== payload.id),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            };
        default: 
            return state;
    }
}