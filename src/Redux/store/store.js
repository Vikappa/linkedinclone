// import { combineReducers } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import experienceReducer from "../Reducers/experienceReducer";
import currentUserReducer from "../Reducers/fetchCurrentUser";
import allUserReducer from "../Reducers/fetchAllUsers";
import fetchAllPostReducer from "../Reducers/fetchAllPostReducer";
import reducerInspectedUser from "../Reducers/reducerInspectedUser";
import focusedPostReducer from "../Reducers/focusedPostReducer";
import jobsReducer from "../Reducers/JobsReducer";

const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  allUserArray: allUserReducer,
  arrayAllPosts: fetchAllPostReducer,
  inspectedUser: reducerInspectedUser,
  idFocusedPost: focusedPostReducer,
});

const store = configureStore({
  reducer: mainReducer,
  jobs: jobsReducer,
});

export default store;
