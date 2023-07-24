import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  algorithmSelect: '',
  userCount1: 0,
  userCount2: 0,
  userCount3: 0,
  userCount4: 0,
}

const algorithmSelectReducer = createSlice({
  name: 'algorithmSelect',
  initialState,
  reducers: {
    setAlgorithmSelect: (state, action) => {
      state.algorithmSelect = action.payload
    },
    setUserCount1: (state, action) => {
      state.userCount1 = action.payload
    },
    setUserCount2: (state, action) => {
      state.userCount2 = action.payload
    },
    setUserCount3: (state, action) => {
      state.userCount3 = action.payload
    },
    setUserCount4: (state, action) => {
      state.userCount4 = action.payload
    }
  }
})

export const {
  setAlgorithmSelect,
  setUserCount1,
  setUserCount2,
  setUserCount3,
  setUserCount4
} = algorithmSelectReducer.actions;
export default algorithmSelectReducer.reducer;