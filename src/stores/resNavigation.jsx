import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false
};

const resNavigationReducer = createSlice({
  name: "resNavigation",
  initialState,
  reducers: {
    toogleResNavigation: (state) => {
      state.visible = !state.visible;
    }
  }
});

export const { toogleResNavigation } = resNavigationReducer.actions;

export default resNavigationReducer.reducer;