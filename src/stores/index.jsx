import { configureStore } from "@reduxjs/toolkit";
import sentimentQuery from "./sentiment-query.jsx";
import algorithmSelectReducer from "./algorithm.jsx";
import resNavigation from "./resNavigation.jsx";

export const store = configureStore({
  reducer: {
    sentimentQuery,
    algorithmSelectReducer,
    resNavigation
  }
});