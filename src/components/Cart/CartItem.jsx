import React, { useCallback, useEffect, useState } from "react";

const CartItem = ({
  name,
  img,
  id,
  number,
  price,
  reRenderCart,
  handleChangeProductCount,
  count
}) => {
  let [countItem, setCountItem] = useState(count);

  const handleNegativeNum = (num) => (+num < 1 ? 1 : +num);

  const deleteCartItem = () => {
    const items = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem(
      "cart",
      JSON.stringify(items.filter((item) => item.id !== id))
    );
    reRenderCart((reRender) => !reRender);
  };
  useEffect(()=>{
    handleChangeProductCount(id, countItem)
  },[countItem])
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={img} alt="" />
      <span className="cart-item__name">{name}</span>
      <div className="cart-item__options">
        <button onClick={() => setCountItem(--countItem)} disabled={countItem === 1}>
          -
        </button>
        <input
          type="number"
          min={1}
          value={countItem}
          onChange={(e) => setCountItem(handleNegativeNum(e.target.value))}
        />
        <button onClick={() => setCountItem(++countItem)}>+</button>
      </div>
      <span className="cart-item__price">${price}</span>
      <button className="cart-item__deleteBtn" onClick={deleteCartItem}>
        <i class="fas fa-trash" />
      </button>
    </div>
  );
};

export default CartItem;
