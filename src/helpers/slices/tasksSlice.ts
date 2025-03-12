import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../types/tasksTypes';

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      console.log(action);

      return state.filter((task) => task.id !== action.payload);
    },
    // toggleTask => task
  },
});
export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
