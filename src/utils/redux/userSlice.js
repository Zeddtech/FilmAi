import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    removeUser: () => null,
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
