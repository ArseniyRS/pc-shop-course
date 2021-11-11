import React, { useEffect, useState } from "react";

const CartItem = ({ name, img, number, price, getTotalPrice, total }) => {
  let [count, setCount] = useState(1);
  let [countStage, setCountStage] = useState(count);
  const handleNegativeNum = (num) => (+num < 1 ? 1 : num);

  useEffect(() => {
    getTotalPrice((total) => {
      if (count === countStage) return total + +countStage * price;

      if (count >= countStage)
        return total - +countStage * +price + +price * count;
      return total - +countStage * +price + +price * count;
    });
  }, [count]);
  useEffect(() => {
    setCountStage(count);
  }, [count]);
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={img} alt="" />
      <span className="cart-item__name">{name}</span>
      <div className="cart-item__options">
        <button
          onClick={() => setCount((count) => handleNegativeNum(count - 1))}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={count}
          onChange={(e) => setCount(handleNegativeNum(e.target.value))}
        />
        <button onClick={() => setCount(++count)}>+</button>
      </div>
      <span className="cart-item__price">${price}</span>
    </div>
  );
};

export default CartItem;
