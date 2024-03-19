import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";

const appReducer = combineReducers({
  notesStore: notesReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: appReducer,
  });
};
