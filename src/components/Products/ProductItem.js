import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

const ProductItem = ({ id, name, price, number, img }) => {
    const [isAddedInCart, setIsAddedInCart] = useState(false)

    const addToCard = () => {
        const productsInCart = JSON.parse(localStorage.getItem('cart'))
        if (productsInCart) {
            const found = productsInCart.find(product => product.id === id)
            if (found) {
                localStorage.setItem('cart', JSON.stringify(productsInCart.filter(product => product.id !== id)))
                setIsAddedInCart(false)
            } else {
                localStorage.setItem('cart', JSON.stringify([...productsInCart, { name, price, number, img, id }]))
                setIsAddedInCart(true)
            }
            return
        } else {
            localStorage.setItem('cart', JSON.stringify([{ name, price, number, img, id }]))
        }
    }

    useEffect(() => {
        const productsInCart = JSON.parse(localStorage.getItem('cart'))
        if (productsInCart) {
            const found = productsInCart.find(product => product.id === id)
            if (found)
                setIsAddedInCart(true)
            else
                setIsAddedInCart(false)
        }
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
                <button className={'products-item__btn fav-btn '}><i className="fas fa-heart" /></button>
                <button className={`products-item__btn cart-btn ${isAddedInCart ? 'cart-btn-active' : ''}`} onClick={addToCard}><i className="fas fa-shopping-cart" /></button>
            </div>
        </div>
    );
};

export default ProductItem;