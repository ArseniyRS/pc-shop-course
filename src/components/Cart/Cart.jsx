import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "../../styles/cart.scss";

const Cart = () => {
  const [products, setProducts] = useState( JSON.parse(localStorage.getItem('cart')) || [] );
  const [total, setTotal] = useState(0);
  const [forRerender, setForRerender] = useState(false);

  const handleChangeProductCount = (id, count) => {
    
    console.log(count)
      const copyProducts = [...products]
      const idx = copyProducts.findIndex(product => product.id === id)
      copyProducts[idx].count = count
      setProducts(copyProducts)
  }
  console.log(total)
  useEffect(()=>{
    const copyProducts = [...products]
    if(copyProducts.length){
      setTotal(copyProducts.reduce((prev, cur) =>prev + +cur.count * +cur.price , 0))
      localStorage.setItem('cart',  JSON.stringify(copyProducts))
    }
  },[products])
  

  return (
    <div className="cart">
      <h2 className="cart__title">Cart Items</h2>
      {products.length ? (
        <>
          {products.map((product) => (
            <CartItem
              key={product.id}
              reRenderCart={setForRerender}
              handleChangeProductCount={handleChangeProductCount}
              {...product}
            />
          ))}
          <span className="cart__total">Total: ${total}</span>
        </>
      ) : (
        <h2 className="cart__empty">Cart is Empty<br/><i class="far fa-frown"/></h2>
      )}
    </div>
  );
};

export default Cart;
