import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    // Ensure props.data exists before destructuring
    const { id, productName, price, productImage } = props.data || {};

    // Use the useContext hook to access the cart functions
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    // Handle the case where props.data is not defined
    if (!id || !productName || !price || !productImage) {
        return null; // or return some fallback UI
    }

    return (
        <div className="cartItem">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        type="number"
                        value={cartItems[id] || 0} // Provide a fallback if cartItems[id] is undefined
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};

// Define prop types for the CartItem component
CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        productImage: PropTypes.string.isRequired,
    }).isRequired, // Ensure data is required
};

export default CartItem;
