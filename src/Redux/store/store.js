// import { combineReducers } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import experienceReducer from "../Reducers/experienceReducer";
import currentUserReducer from "../Reducers/fetchCurrentUser";
import allUserReducer from "../Reducers/fetchAllUsers";
import fetchAllPostReducer from "../Reducers/fetchAllPostReducer";
import reducerInspectedUser from "../Reducers/reducerInspectedUser";
import focusedPostReducer from "../Reducers/focusedPostReducer";
import jobsReducer from "../Reducers/JobsReducer";
import allPostCommentsReducer from "../Reducers/allPostCommentReduce";

const mainReducer = combineReducers({
  experience: experienceReducer,
  currentUser: currentUserReducer,
  allUserArray: allUserReducer,
  arrayAllPosts: fetchAllPostReducer,
  inspectedUser: reducerInspectedUser,
  idFocusedPost: focusedPostReducer,
  jobs: jobsReducer,
  postCommentsArray: allPostCommentsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
