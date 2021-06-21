import { combineReducers } from "redux";

import auth from "./auth";
import keywords from "./keywords";
import product from "./product";
import promo from "./promo";

export default combineReducers({
  auth,
  keywords,
  product,
  promo,
});
