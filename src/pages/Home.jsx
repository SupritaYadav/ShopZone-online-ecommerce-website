
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <div className="home-content">
        <h1>Welcome to ShopZone 🛍️</h1>

        <p>
          Your one-stop online shopping store
        </p>

        <p className="home-description">
          Discover amazing products at great prices.
          Shop your favourites easily and conveniently.
        </p>

        <Link to="/shop" className="shop-now-btn">
          Shop Now
        </Link>
      </div>

    </div>
  );
}

export default Home;