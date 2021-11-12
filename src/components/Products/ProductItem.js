import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const ProductItem = ({ id, name, price, number, img, doReRender }) => {
    const [isAddedInCart, setIsAddedInCart] = useState(false)
    const [isAddedToFav, setIsAddedToFav] = useState(false)

    const addToCardOrFav = (value) => {
        const productsInCart = JSON.parse(localStorage.getItem(value))
        if (productsInCart) {
            const found = productsInCart.find(product => product.id === id)
            if (found) {
                localStorage.setItem(value, JSON.stringify(productsInCart.filter(product => product.id !== id)))
                doReRender(render => !render)
                return value === 'cart' ? setIsAddedInCart(false) : setIsAddedToFav(false)
            } else {
                localStorage.setItem(value, JSON.stringify([...productsInCart, { name, price, number, img, id, count: 1 }]))
                return value === 'cart' ? setIsAddedInCart(true) : setIsAddedToFav(true)
            }
        } else {
            localStorage.setItem(value, JSON.stringify([{ name, price, number, img, id, count: 1 }]))
        }
    }
    const changeStateBtnActive = (value) =>{
        const productsForSave = JSON.parse(localStorage.getItem(value))
        if (productsForSave) {
            const found = productsForSave.find(product => product.id === id)
            if (found)
                return value === 'cart' ? setIsAddedInCart(true) : setIsAddedToFav(true)
            else
                return value === 'cart' ? setIsAddedInCart(false) : setIsAddedToFav(false)
        }
    }

    useEffect(() => {
        changeStateBtnActive('cart')
        changeStateBtnActive('fav')
    }, [])


    const history = useHistory()
    return (
        <div className={'products-item'} >
            <img className="products-item__img" src={img} alt="" />
            <div className="products-item__info" onClick={() => history.push(`/product/${number}`)}>
                <span className="products-item__name">{name}</span>
                <span className="products-item__price">${price}</span>
                {isAddedInCart && <span className="products-item__isAddedToCart"><i className="fas fa-shopping-cart" /></span>}
            </div>
            <div className="products-item__btns">
                <button className={`products-item__btn fav-btn ${isAddedToFav ? 'fav-btn-active' : ''}`} onClick={()=>addToCardOrFav('fav')}><i className="fas fa-heart" /></button>
                <button className={`products-item__btn cart-btn ${isAddedInCart ? 'cart-btn-active' : ''}`} onClick={()=>addToCardOrFav('cart')}><i className="fas fa-shopping-cart" /></button>
            </div>
        </div>
    );
};

export default ProductItem;