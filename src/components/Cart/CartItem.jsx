import React, { useCallback, useEffect, useState } from "react";

const CartItem = ({
  name,
  img,
  id,
  number,
  price,
  getTotalPrice,
  reRenderCart,
  total
}) => {
  let [count, setCount] = useState({active: 1, prev: 1});

  const handleNegativeNum = (num) => (+num < 1 ? {active: 1, prev: 1} : {active: num, prev: count.active});

 
  useEffect(() => {
    
    if(count.active === count.prev){
      getTotalPrice(total + (+count.active * price))
    }else{
      getTotalPrice(total + (+price * count.active) - (+count.prev * +price))
    }
    return () => {
       getTotalPrice(total - +count.active * price);
    };
  }, [count]);


  const deleteCartItem = useCallback(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem(
      "cart",
      JSON.stringify(items.filter((item) => item.id !== id))
    );
    reRenderCart((reRender) => !reRender);
  },[]);

  return (
    <div className="cart-item">
      <img className="cart-item__img" src={img} alt="" />
      <span className="cart-item__name">{name}</span>
      <div className="cart-item__options">
        <button
          onClick={() => setCount((count) => ({active: count.active-1, prev: count.active}))}
          disabled={count.active === 1}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={count.active}
          onChange={(e) => setCount(handleNegativeNum(e.target.value))}
        />
        <button onClick={() => setCount(count => ({active: count.active+1, prev: count.active}))}>+</button>
      </div>
      <span className="cart-item__price">${price}</span>
      <button className="cart-item__deleteBtn" onClick={deleteCartItem}>
        <i class="fas fa-trash" />
      </button>
    </div>
  );
};

export default CartItem;
