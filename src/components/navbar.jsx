
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">Home</Link>
            <Link to="/shop" className="link">Shop</Link>
            <Link to="/cart" className="link">Cart <i className="fa-solid fa-cart-shopping"></i></Link>
        </nav>
    );
};

