import { combineReducers } from "redux";

import {
  userProfile,
  updateUserProfile
} from './core/reducers/user'
import {
  shippedProducts,
  stockProducts,
  salesProducts
} from './core/reducers/products'

const appReducer = combineReducers({
  userProfile,
  updateUserProfile,
  shippedProducts,
  stockProducts,
  salesProducts,
  
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;