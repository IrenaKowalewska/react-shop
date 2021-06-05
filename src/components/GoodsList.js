import { GoodsItem } from './GoodsItem';
const GoodsList = (props) => {
    const { goods = [], addToCart = Function.prototype } = props;

    if (!goods.length) {
        return <h2>Нету ничего для отображения</h2>
    }

    return <div className="goods">
            {goods.map(item => <GoodsItem key={item.mainId} {...item} addToCart={addToCart}/>)}
            </div>
}

export { GoodsList };