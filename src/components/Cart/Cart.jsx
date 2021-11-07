import React, { useState } from 'react'
import CartItem from './CartItem'
import '../../styles/cart.scss'


const Cart = () =>{
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    return(
        <div className="cart">
            <h2 className="cart__title">Cart Items</h2>
                {products.map(product => <CartItem {...product}/>)}
        </div>
    )
}

export default Cart