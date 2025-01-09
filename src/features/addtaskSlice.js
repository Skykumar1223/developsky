import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [], 
  reducers: {
    // Add
    addTask: (state, action) => {
      state.push(action.payload); 
    },
    // update
    updateTask: (state, action) => {
      const { id, notes } = action.payload; 
      const task = state.find((task) => task.id === id); 
      if (task) {
        task.notes = notes; 
      }
    },
  },
});

export const { addTask,updateTask } = taskSlice.actions;
export default taskSlice.reducer;
