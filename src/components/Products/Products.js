import React from 'react';
import ProductItem from "./ProductItem";
import '../../styles/products.scss'
const Products = ({title}) => {
    return (
        <div className={'products'}>
            <h2 className={'products__title'}>{title}</h2>
            <div className="products-container">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

        </div>
    );
};

export default Products;