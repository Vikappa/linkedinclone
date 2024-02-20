// import { combineReducers } from "redux";
import { experienceReducer } from "../Reducers/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import currentUserReducer from "../Reducers/fetchCurrentUser";


const rootReducer = combineReducers({

  //currentUser: reducerCurrentUser,
  //arrayAllUsers: allUserReducers,
  
})


const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  //arrayAllUsers: allUserReducers,
})

const store = configureStore({
  reducer: mainReducer,
})

export default store;
