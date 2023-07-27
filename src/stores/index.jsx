import { configureStore } from "@reduxjs/toolkit";
import user from "./user.jsx";
import sentimentQuery from "./sentiment-query.jsx";
import algorithmSelectReducer from "./algorithm.jsx";
import resNavigation from "./resNavigation.jsx";

export const store = configureStore({
  reducer: {
    sentimentQuery,
    algorithmSelectReducer,
    resNavigation,
    user
  }
});