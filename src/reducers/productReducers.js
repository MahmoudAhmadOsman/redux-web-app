import { FETCH_PRODUCTS } from "../types/types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
};
//3. Go to Filter component and use connect() function
