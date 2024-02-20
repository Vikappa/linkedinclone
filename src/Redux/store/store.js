// import { combineReducers } from "redux";
import { experienceReducer } from "../Reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  experience: experienceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
