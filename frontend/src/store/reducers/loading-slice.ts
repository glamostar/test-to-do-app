import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const LoadingSlice = createSlice({
  name: "loading",
  initialState: { value: initialState },
  reducers: {
    openLoading: (state) => {
      state.value = true;
    },
    closeLoading: (state) => {
      state.value = false;
    },
  },
});

export const { openLoading, closeLoading } =
  LoadingSlice.actions;

export default LoadingSlice.reducer;
