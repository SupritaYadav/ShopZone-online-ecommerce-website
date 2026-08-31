import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails(){
   const{ id } = useParams();
   const[product, setProduct] = useState(null);
   const[loading, setLoading] = useState(true);
   const[addedMessage, setAddedMessage] = useState(false);

   useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`).then((response)=> response.json()).then((data) => {
        setProduct(data);
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
        setLoading(false);
    });
   },[id]);

   const addToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = existingCart.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existingProduct) {
    updatedCart = existingCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
  } else {
    updatedCart = [
      ...existingCart,
      { ...product, quantity: 1 }
    ];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  setAddedMessage(true);
  setTimeout(() => {
    setAddedMessage(false);
  }, 3000);

  // alert("Product added to cart!");
};

   if(loading){
    return <h2>Loading Product...</h2>
   }
   if(!product){
    return <h2>Product not Found</h2>
   }
   return(
    <div className="product-details">
        <img src={product.thumbnail} alt={product.title} />

        <div className="product-info">

        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <p>Rating : ⭐{product.rating}</p>
        <p>Category : {product.category}</p>
        <p>Brand : {product.brand}</p><br />
        <button onClick={addToCart}>🛒Add to Cart</button><br /><br />

        {addedMessage && (
          <div className="cart-success-message">
             🎉Product added to cart!
          </div>
        )} <br /><br />
        
        <Link to="/shop"  className="back-to-shop">⬅Back to Shop</Link>
            </div>
        
    </div>
   );

}
export default ProductDetails;