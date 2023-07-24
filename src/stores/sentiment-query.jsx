import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  sentimentInput: ''
}


const sentiment = createSlice({
  name: 'sentimentQuery',
  initialState,
  reducers: {
    setSentimentQuery: (state, action) => {
      state.sentimentInput = action.payload
    }
  }
})


export const {setSentimentQuery} = sentiment.actions;
export default sentiment.reducer;