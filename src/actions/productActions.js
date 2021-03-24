//================ ALL ACTIONS
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("https://custom-states-api.herokuapp.com/products"); //get data from custom remote api

  //Assign the data to res variable after converting into JSON
  const data = await res.json();
  console.log(data);
  //Now dispatch the action using dispatch function
  // dispatch(arg1, arg2)
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

//2. Go to productReducers file and define two cases for FITER_PRODUCTS_BY_SIZE and ORDER_PRODUCTS_BY_PRICE
