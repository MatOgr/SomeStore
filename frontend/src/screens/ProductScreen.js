import "./ProductScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//  Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  // const { qty, setQty } = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
    history.push("/cart");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>error</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.img} alt={product.name} />
            </div>

            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                <h4>Price:</h4>
                <span>
                  {product.price} <i className="fas fa-brain"></i>
                </span>
              </p>
              <p>Status: {product.available ? "In Stock" : "Out of Stock"}</p>
              <p>
                <button type="button" disabled={!product.available} onClick={addToCartHandler}>
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
