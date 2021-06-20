import { combineReducers } from "redux";

import auth from "./auth";
import keywords from "./keywords";
import product from "./product";

export default combineReducers({
  auth,
  keywords,
  product,
});
