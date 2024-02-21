// import { combineReducers } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import experienceReducer from "../Reducers/experienceReducer";
import currentUserReducer from "../Reducers/fetchCurrentUser";
import allUserReducer from '../Reducers/fetchAllUsers'
import fetchAllPostReducer from "../Reducers/fetchAllPostReducer";
import reducerInspectedUser from "../Reducers/reducerInspectedUser";

const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  allUserArray: allUserReducer,
  arrayPosts: fetchAllPostReducer,
  inspectedUser: reducerInspectedUser
})

const store = configureStore({
  reducer: mainReducer,
})

export default store;
