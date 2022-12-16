import styles from "./AllProducts.module.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductCard({ src, title, price, brand,id }) {
  return (
    <div>
        <div className={styles.each}>
        <Link to={`/allproducts/${id}`}>
          <img className={styles.photo} src={src} alt="i" />
          <p className={styles.title}>{title}</p>
          </Link>
          <p className={styles.price}>MRP(₹) {price}</p>
          <p className={styles.brand}>Brand : {brand}</p>
          <p className={styles.rating}>Rating : ★★★★☆</p>
          <button className={styles.button}>Add to Cart 👜 </button>
        </div>
      
    </div>
  );
}

function AllProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Heading marginTop="15px" textAlign="center" color="rgb(252,39,121)">
        All Products
      </Heading>
      <div className={styles.mainDiv}>
        {data.map((prod) => (
          <ProductCard
            id={prod.id}
            key={prod.id}
            src={prod.image}
            title={prod.title}
            price={prod.price}
            brand={prod.brand}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
