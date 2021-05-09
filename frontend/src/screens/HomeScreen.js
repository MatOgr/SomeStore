import "./HomeScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Components
import Product from "../components/Product";

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Hottest Gear</h2>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              guitar_id={product._id}
              img={product.img}
              price={product.price}
              description={product.description}
              name={product.name}
              available={!product.available}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
