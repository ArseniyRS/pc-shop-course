import React from 'react';
import {Button} from "react-bootstrap";

const ProductItemDetail = () => {
    return (
        <div className={'product-item-detail'}>
            <div className="product-item-detail__img">
                <img className={'product-item-detail__img'}
                     src="https://www.macworld.com/wp-content/uploads/2021/03/2020-imac-mac-pro-100873820-orig-3.jpg?quality=50&strip=all"
                     alt=""/>
            </div>
            <div className="product-item-detail__info">
                <h2 className="product-item-detail__title">Watch Black Apple</h2>
                <span className="product-item-detail__number">Number: 74827493</span>
                <div className="product-item-detail__btns">
                    <Button className={'slider__btn'} variant={'success'}>In Cart</Button>
                    <button className={'product-item-detail__btn'}><i className="fas fa-heart"/></button>
                </div>

                <p className="product-item-detail__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam commodi doloremque dolores ea incidunt iste minus molestias quod quos reiciendis?</p>
                <div className="product-item-detail__specs">
                    <div className="product-item-detail__spec">
                        <span className={'spec__title'}>Display</span>
                        <span className={'spec__value'}>Retina</span>
                    </div>
                    <div className="product-item-detail__spec">
                        <span className={'spec__title'}>Display</span>
                        <span className={'spec__value'}>Retina</span>
                    </div>
                    <div className="product-item-detail__spec">
                        <span className={'spec__title'}>Display</span>
                        <span className={'spec__value'}>Retina</span>
                    </div>
                    <div className="product-item-detail__spec">
                        <span className={'spec__title'}>Display</span>
                        <span className={'spec__value'}>Retina</span>
                    </div>
                    <div className="product-item-detail__spec">
                        <span className={'spec__title'}>Display</span>
                        <span className={'spec__value'}>Retina</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemDetail;