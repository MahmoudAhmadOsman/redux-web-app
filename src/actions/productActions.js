//Step: 2
import { FETCH_PRODUCTS } from "../types/types";

//For Action 1 dispatch and payload
export const fetchProducts = () => async (dispatch) => {
  //Now make a fetch request
  const res = await fetch("https://custom-states-api.herokuapp.com/products");
  const data = await res.json();
  //Now you you can dispatch the action using dispatch method. dispatch(para1, param2) takes 2 params or objects, type & payload
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
