import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface PayState {
  step: number;
  data: {
    paymentMethod: string;
  };
}

const initialState: PayState = {
  step: 1,
  data: {
    paymentMethod: 'Crypto currency',
  },
};

export const PaySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    stepChange: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const activeStep = (state: RootState) => state.pay.step;
export const payData = (state: RootState) => state.pay.data;

export const { stepChange } = PaySlice.actions;

export default PaySlice.reducer;
