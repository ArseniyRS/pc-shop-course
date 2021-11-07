import React from 'react'



const CartItem = ({name,img,number,price}) =>{
    return(
        <div className="cart-item">
            <img className="cart-item__img" src={img} alt="" />
            <span className="cart-item__name">{name}</span>
            <span className="cart-item__price">${price}</span>
        </div>
    )
}

export default CartItem