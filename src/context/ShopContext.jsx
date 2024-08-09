import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    PRODUCTS.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = PRODUCTS.find(product => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
