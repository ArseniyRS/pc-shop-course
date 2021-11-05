import React, {useEffect, useState} from 'react';
import ProductItem from "./ProductItem";
import '../../styles/products.scss'
import {withRouter} from "react-router-dom";
import {getProductsByCategoryReq} from "../../api";

const Products = ({title, products, setProducts, ...props}) => {
    const getProductsByCategory = async (id) =>{
        const {data} = await getProductsByCategoryReq(id)
        setProducts(data)
    }
    useEffect(()=>{
        if(props.match.params.categoryId){
            getProductsByCategory(props.match.params.categoryId)
        }
    },[props.location.pathname])

    return (
        <div className={'products'}>
            <h2 className={'products__title'}>{title}</h2>
            <div className="products-container">
                {products.map(product => <ProductItem {...product}/>)}

            </div>

        </div>
    );
};

export default withRouter(Products);