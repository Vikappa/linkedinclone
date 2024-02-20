// import { combineReducers } from "redux";
import { experienceReducer } from "../Reducers/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit"



const rootReducer = combineReducers({

  experience: experienceReducer,
  //currentUser: reducerCurrentUser,
  //arrayAllUsers: allUserReducers,
  
})
  

const store = configureStore({
  reducer: rootReducer,
})

export default store;
