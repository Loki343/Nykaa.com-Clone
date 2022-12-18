import styles from "./AllProducts.module.css";
import { Heading } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { CartContext } from "../../Components/CartContext/CartContextProvider";
import { addToCart } from "./../../Components/CartContext/action";

const itemAlreadyExist = (id, cartcartItems) => {
  if (cartcartItems.find((item) => item.id === id)) {
    return true;
  }
  return false;
};

function ProductCard({ src, title, price, brand, id, onClick, disabled }) {
  return (
    <div>
      <div className={styles.each}>
        <Link to={`/allproducts/${id}`}>
          <img className={styles.photo} src={src} alt="i" />
          <p className={styles.title}>{title}</p>
        </Link>
        <p className={styles.price}>MRP(₹) : {price}</p>
        <p className={styles.brand}>Brand : {brand}</p>
        <p className={styles.rating}>Rating : ★★★★☆</p>
        <button disabled={disabled} className={styles.button} onClick={onClick}>
          Add to Cart 👜{" "}
        </button>
      </div>
    </div>
  );
}

const getCurrentPageUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};

function AllProducts() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(CartContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );
  const [orderBy, SetOrderBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const sort = "price";
  const limit = 8;

  useEffect(() => {
    let apiUrl;
    if(filterBy){
      apiUrl = `http://localhost:8080/products?_limit=${limit}&_page=${page}&brand=${filterBy}`;
    }
    else if (orderBy) {
      apiUrl = `http://localhost:8080/products?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${orderBy}`;
    }
    // else if (orderBy && filterBy) {
    //   apiUrl = `http://localhost:8080/products?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${orderBy}&brand=${filterBy}`;
    // }  
    else {
      apiUrl = `http://localhost:8080/products?_limit=${limit}&_page=${page}`;
    }

    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [page, orderBy,filterBy]);

  useEffect(() => {
    let params = { page };
    if (orderBy) {
      params.orderBy = orderBy;
    }
    if(filterBy){
      params.filterBy=filterBy
    }

    setSearchParams(params);
  }, [page, orderBy,filterBy]);

  const sortByPrice = (val) => {
    SetOrderBy(val);
  };
  const filterByBrand = (val) => {
    setFilterBy(val);
  };

  return (
    <div>
      <Heading
        fontFamily="cursive"
        marginTop="15px"
        textAlign="center"
        color="rgb(252,39,121)"
      >
        All Products
      </Heading>
      <div className={styles.sortFilter}>
        <select className={styles.sorting} onChange={(e) => sortByPrice(e.target.value)}>
          <option value="">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
          <option value="">Reset</option>
        </select>
        <select className={styles.filtering} onChange={(e) => filterByBrand(e.target.value)}>
          <option value="">Filter By Brand</option>
          <option value="Lakme">Lakme</option>
          <option value="Nivea">Nivea</option>
          <option value="Maybelline">Maybelline</option>
          <option value="Lotus">Lotus</option>
          <option value="MAC">MAC</option>
          <option value="Nykaa">Nykaa</option>
          <option value="">Reset</option>
        </select>
      </div>
      <div className={styles.mainDiv}>
        {data.map((prod) => (
          <ProductCard
            id={prod.id}
            key={prod.id}
            src={prod.image}
            title={prod.title}
            price={prod.price}
            brand={prod.brand}
            onClick={() => dispatch(addToCart(prod))}
            disabled={itemAlreadyExist(prod.id, state)}
          />
        ))}
      </div>
      <div className={styles.buttonDiv}>
        <button
          className={styles.button1}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </button>
        <button className={styles.button2}>{page}</button>
        <button
          className={styles.button1}
          disabled={page === 3}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AllProducts;
