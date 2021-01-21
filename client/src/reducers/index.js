import { combineReducers } from "redux";
import job from "./job";
import auth from "./auth";

export default combineReducers({
  job,
  auth,
});
