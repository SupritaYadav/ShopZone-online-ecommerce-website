
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop(){
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((response) => response.json()).then((data) =>{
            setProducts(data.products);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <h2>Loading Products...</h2>;
    }

    return(
        <div className="shop-page">
            <h1>ShopZone Products</h1>

        <div className="product-grid">
            {products.map((product) =>(
                <div className="product-card" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>

                    <Link to={`/product/${product.id}`}>
                    View Details
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );

}
export default Shop;