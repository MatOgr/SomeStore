import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      description: data.description,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const buyProduct = (id) => async (dispatch, getState) => {
  const {data} = await axios.delete(`api/products/${id}`);
  dispatch({
    type: actionTypes.DELETE_PRODUCT,
    payload: data._id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
