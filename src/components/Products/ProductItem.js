import React from 'react';
import {useHistory} from 'react-router-dom'
const ProductItem = ({name, price,number, img}) => {
    const history = useHistory()
    return (
        <div className={'products-item'} onClick={()=>history.push(`/product/${number}`)}>
            <img className="products-item__img" src={img} alt=""/>
            <div className="products-item__info">
                <span className="products-item__name">{name}</span>
                <span className="products-item__price">${price}</span>
            </div>
            <div className="products-item__btns">
                <button className={'products-item__btn fav-btn'}><i className="fas fa-heart"/></button>
                <button className={'products-item__btn cart-btn'}><i className="fas fa-shopping-cart"/></button>
            </div>
        </div>
    );
};

export default ProductItem;