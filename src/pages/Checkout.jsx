import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const[orderPlaced , setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem("cart");
    setCart([]);
    setOrderPlaced(true);
  };

  if(orderPlaced){
    return(
      <div className="order-success">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thankyou for shopping with ShopZone</p>

        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1>Your cart is empty</h1>
        <p>Add some products before checkout.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Customer Information */}
        <div className="checkout-form">
          <h2>Customer Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                placeholder="Enter your address"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>

              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    required
                  />
                  Cash on Delivery
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                  />
                  Card
                </label>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="summary-item" key={item.id}>
              <span>{item.title}</span>

              <span>
                ${(
                  item.price * (item.quantity || 1)
                ).toFixed(2)}
              </span>
            </div>
          ))}

          <hr />

          <h2>Total: ${total.toFixed(2)}</h2>
        </div>

      </div>
    </div>
  );
}

export default Checkout;