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
import {
  insights,
  dailySales,
  emailSubs,
  completedTasks,
  tasks,
  employeeStats
} from './core/reducers/dash'

const appReducer = combineReducers({
  userProfile,
  updateUserProfile,
  shippedProducts,
  stockProducts,
  salesProducts,
  insights,
  dailySales,
  emailSubs,
  completedTasks,
  tasks,
  employeeStats,
  
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;