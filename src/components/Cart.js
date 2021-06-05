const Cart = (props) => {
    const { order = 0, handleCartShow = Function.prototype } = props;

    return <div 
                className="cart blue darken-2 white-text" 
                onClick={handleCartShow}
            >
                <i className="material-icons">shopping_cart</i>
                {order ? <span className="cart-quantity">{order}</span> : null}
            </div>
}

export { Cart };