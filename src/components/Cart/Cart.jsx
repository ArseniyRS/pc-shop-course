import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "../../styles/cart.scss";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [forRerender, setForRerender] = useState(false);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart")));
  }, [forRerender]);
  return (
    <div className="cart">
      <h2 className="cart__title">Cart Items</h2>
      {products.length ? (
        <>
          {products.map((product) => (
            <CartItem
              key={product.id}
              reRenderCart={setForRerender}
              getTotalPrice={setTotal}
              total={total}
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
