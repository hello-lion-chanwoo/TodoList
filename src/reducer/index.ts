import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoProps, ITodoSlice, ITodoType } from '../type';

export const initialState: ITodoSlice = {
  todos: [],
  type: 'TODO',
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    init: state => {
      state = initialState;
    },
    addTodo: (state, action: PayloadAction<ITodoProps>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<ITodoProps>) => {
      state.todos = state.todos.filter(todo => {
        if (todo.id === action.payload.id) {
          todo.type = 'DONE';
        }
        return todo;
      });
    },
    changeType: (state, action: PayloadAction<ITodoType>) => {
      state.type = action.payload;
    },
  },
});

export const { addTodo, init, removeTodo, changeType } = todoSlice.actions;
