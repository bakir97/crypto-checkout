import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import payReducer from './PaySlice';

export const store = configureStore({
  reducer: {
    pay: payReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
