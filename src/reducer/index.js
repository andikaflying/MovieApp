import { createStore, applyMiddleware, combineReducers } from "redux";
import moviesReducer from "./MoviesReducer";
import loginReducer from './LoginReducer';
import thunkMiddleware from "redux-thunk";

const middleWare = applyMiddleware(thunkMiddleware);

const rootReducer = combineReducers({ loginReducer, moviesReducer });

const store = createStore(rootReducer, middleWare);

export default store;