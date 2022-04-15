import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cryptoCurrencyModel } from '../mockData';
import { RootState } from './store';

export interface PayState {
  step: number;
  data: {
    paymentMethod: string;
    cryptoCurrency: null | cryptoCurrencyModel;
  };
}

const initialState: PayState = {
  step: 1,
  data: {
    paymentMethod: 'Crypto currency',
    cryptoCurrency: null,
  },
};

export const PaySlice = createSlice({
  name: 'pay',
  initialState,
  reducers: {
    stepChange: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    cryptoChange: (state, action: PayloadAction<cryptoCurrencyModel>) => {
      if (state.data.cryptoCurrency === action.payload) {
        state.data.cryptoCurrency = null;
      } else {
        state.data.cryptoCurrency = action.payload;
      }
    },
  },
});

export const activeStep = (state: RootState) => state.pay.step;
export const payData = (state: RootState) => state.pay.data;

export const { stepChange, cryptoChange } = PaySlice.actions;

export default PaySlice.reducer;
