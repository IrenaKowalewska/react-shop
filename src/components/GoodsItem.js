const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addToCart = Function.prototype
    } = props;
    const { finalPrice } = price;
    return <div className="card hoverable" id={mainId}>
               <div className="card-image">
                    <img src={displayAssets[0].background} alt={displayName}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{displayName}</span>
                    <p>{displayDescription}</p>
               </div>
               <div className="card-action">
                    <button onClick={() => addToCart({mainId, displayName, finalPrice})} className="btn blue darken-2">Купить</button>
                    <span className="right price">{finalPrice} &#8381;</span>
                </div>
            </div>
}

export { GoodsItem };
