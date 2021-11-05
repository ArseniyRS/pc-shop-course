import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";

const ProductItemDetail = ({products, ...props}) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        setProduct(products.find(product => product.number === props.match.params.number))
    }, [])
    return (
        product ?
        <div className={'product-item-detail'}>
            <div className="product-item-detail__img">
                <img className={'product-item-detail__img'}
                     src={product.img}
                     alt=""/>
            </div>
            <div className="product-item-detail__info">
                <h2 className="product-item-detail__title">{product.name}</h2>
                <span className="product-item-detail__number">Number: {product.number}</span>
                <div className="product-item-detail__btns">
                    <Button className={'slider__btn'} variant={'success'}>In Cart</Button>
                    <button className={'product-item-detail__btn'}><i className="fas fa-heart"/></button>
                </div>

                <p className="product-item-detail__desc">{product.desc}</p>
                <div className="product-item-detail__specs">
                    {product.specs.map(spec => <div className="product-item-detail__spec">
                        <span className={'spec__title'}>{spec}</span>
                    </div>)}
                </div>
            </div>
        </div> : <h2>Loading...</h2>
    );
};

export default withRouter(ProductItemDetail);