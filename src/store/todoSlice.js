import { createSlice } from '@reduxjs/toolkit';
import fetchList from '../API/fetchList';

export const fetchList = 

export const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.todoList.list = [...state.todoList.list, action.payload.todos]
      console.log('🚀 ~ file: todoSlice.js:12 ~ .addCase ~ action:', action);
    });
  },
});

export default todoSlice.reducer;  
