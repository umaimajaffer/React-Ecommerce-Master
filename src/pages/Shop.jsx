import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../products";
import "./Shop.css";

export const Shop = () => {
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <div>
            <div className = "heading">
            <h1>Shop Our Products</h1>
            </div>
            <div className="product-list">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.productImage} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        <h2>${product.price.toFixed(2)}</h2>
                        <button className="addToCart" onClick={() => addToCart(product.id)}>
                            Add to Cart {cartItems[product.id] > 0 && `(${cartItems[product.id]})`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
