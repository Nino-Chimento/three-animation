import { createSlice } from "@reduxjs/toolkit";
// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
const { loginSuccess } = slice.actions;
export const login = (username: string) => async (dispatch: any) => {
  try {
    dispatch(loginSuccess(username));
  } catch (e: any) {
    return console.error(e.message);
  }
};
