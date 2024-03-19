import { createSlice, configureStore } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.unshift(action.payload);
    },

    getAll: (state, action) => {
      console.log(action.payload);
      state = action.payload;
    },
  },
});

export const { create, getAll } = notesSlice.actions;

export default notesSlice.reducer;
