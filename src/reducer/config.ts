import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { initialState, todoSlice } from '.';

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
