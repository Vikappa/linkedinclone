// import { combineReducers } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import experienceReducer from "../Reducers/experienceReducer";
import currentUserReducer from "../Reducers/fetchCurrentUser";
import allUserReducer from '../Reducers/fetchAllUsers'

const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  allUserArray: allUserReducer
})

const store = configureStore({
  reducer: mainReducer,
})

export default store;
