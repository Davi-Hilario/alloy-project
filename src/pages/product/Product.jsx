import { useEffect } from 'react';
import style from './Product.module.css';
import { useSelector } from 'react-redux';

function Product () {

    const selectedProduct = useSelector((state) => state.selectedProduct)
    
    useEffect(() => {
        console.log(selectedProduct);
    }, [])


    return (
        <div className={style["Product"]}>
            
        </div>
    );
}

export default Product;