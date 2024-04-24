import style from './CardRow.module.css'
import ProductCard from '../productCard/ProductCard';

function CardRow ({ category }) {
    return (
        <div className={style["row-items"]}>
            <div className={style["row-header"]}>
                <span>{category}</span>
            </div>
            <div className={style["row-body"]}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default CardRow;