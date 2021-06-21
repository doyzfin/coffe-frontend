import { combineReducers } from "redux";

import auth from "./auth";
import keywords from "./keywords";

export default combineReducers({
  auth,
  keywords,
});
