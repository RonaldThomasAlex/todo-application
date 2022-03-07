import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  list: [],
};

export const toDoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    fetchTaskList: (state) => {
      state.isLoading = true;
    },
    addTask: (state, action) => {
      state.list.push({
        name: action.payload,
      });
    },
    taskListSuccess: (state, action) => {
      state.list = action.payload.list;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, fetchTaskList, taskListSuccess } =
  toDoListSlice.actions;

export default toDoListSlice.reducer;
