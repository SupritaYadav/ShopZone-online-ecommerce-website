import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                ShopZone
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>

            </div>
        </nav>
    );
}
export default Navbar;