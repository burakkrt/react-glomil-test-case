import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  username: 'testUsername',
  password: '12344312',
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer;