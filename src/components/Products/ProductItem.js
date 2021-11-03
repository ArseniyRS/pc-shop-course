import React from 'react';

const ProductItem = () => {
    return (
        <div className={'products-item'}>
            <img className="products-item__img" src="https://www.macworld.com/wp-content/uploads/2021/03/2020-imac-mac-pro-100873820-orig-3.jpg?quality=50&strip=all" alt=""/>
            <div className="products-item__info">
                <span className="products-item__name">iMac Pro Retina</span>
                <span className="products-item__price">$510</span>
            </div>
            <div className="products-item__btns">
                <button className={'products-item__btn fav-btn'}><i className="fas fa-heart"/></button>
                <button className={'products-item__btn cart-btn'}><i className="fas fa-shopping-cart"/></button>
            </div>
        </div>
    );
};

export default ProductItem;