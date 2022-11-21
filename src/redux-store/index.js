import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categoriesReducer from "./categories";
import productsReducer from "./products";

let reducers = combineReducers({ categoriesReducer,productsReducer});
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();