import {configureStore} from "@reduxjs/toolkit";
import user from "./user.jsx";
import sentimentQuery from './sentiment-query.jsx'
import algorithmSelectReducer from './algorithm.jsx'

export const store = configureStore({
  reducer: {
    sentimentQuery,
    algorithmSelectReducer,
    user
  }
})