
function CartItem(props) {
    const { 
        mainId, 
        displayName, 
        finalPrice, 
        quantity, 
        deleteFromCart = Function.prototype,
        removeProductCount = Function.prototype,
        addProductCount = Function.prototype    
    } = props;
    
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