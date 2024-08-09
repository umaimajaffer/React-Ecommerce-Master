import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../products";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart, addToCart, updateCartItemCount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="heading">
      <h1>Your Cart</h1>
      {PRODUCTS.filter(product => cartItems[product.id] > 0).map(product => (
        <div key={product.id} className="cart-item">
          <img src={product.productImage} alt={product.productName} />
          <div>
            <h2>{product.productName}</h2>
            <h2>${product.price.toFixed(2)}</h2>
            <div >
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <input
                type="number"
                value={cartItems[product.id]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
              />
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};


