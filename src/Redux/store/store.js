// import { combineReducers } from "redux";
import { experienceReducer } from "../Reducers/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import currentUserReducer from "../Reducers/fetchCurrentUser";
import allUserReducer from '../Reducers/fetchAllUsers'

const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  allUserArray: allUserReducer
  //arrayAllUsers: allUserReducers,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store;
