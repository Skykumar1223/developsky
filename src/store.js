import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/addtaskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer, 
  },
});

export default store;