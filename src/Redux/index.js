import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movie from "./reducer/movie";
import credential from "./reducer/credential";
import user from "./reducer/user";
import cinema from "./reducer/cinema";
import booking from "./reducer/booking";
import myref from "./reducer/myref";
import loading from "./reducer/loading";
import movieManagement from "./reducer/movieManagement";
import usersManagement from "./reducer/usersManagement";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  movie,
  credential,
  user,
  cinema,
  booking,
  myref,
  loading,
  movieManagement,
  usersManagement

});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
