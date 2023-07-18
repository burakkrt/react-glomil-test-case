import {configureStore} from "@reduxjs/toolkit";
import user from "./user.jsx";

export const store = configureStore({
  reducer: {
    user
  }
})