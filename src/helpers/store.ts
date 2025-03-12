import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import taskSlice from './slices/taskSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
