import React, { useState } from 'react'
import CartItem from './CartItem'
import '../../styles/cart.scss'


const Cart = () =>{
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [total, setTotal] = useState(0)
    return(
        <div className="cart">
            <h2 className="cart__title">Cart Items</h2>
                {products.map(product => <CartItem key={product.id} getTotalPrice={setTotal} {...product}/>)}
                <span className="cart__total">Total: ${total}</span>
        </div>
    )
}

export default Cart