//Step: 3

import { FETCH_PRODUCTS } from "../types/types";

//All REDUCERS
// productReducer takes (state, {}, action)
export const productReducer = (state, {}, action) => {
  //First test on switch
  switch (action.type) {
    case FETCH_PRODUCTS:
          return {
              item: action.payload
          };
      detault: return state;
  }
};
