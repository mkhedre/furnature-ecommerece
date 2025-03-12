import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../types/tasksTypes';

const initialState: Task[] = [];
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action);

      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    searchTask: (state, action) => {
      return state.filter((task) =>
        task.text.toLowerCase().includes(action.payload)
      );
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, toggleTask, searchTask } =
  taskSlice.actions;
