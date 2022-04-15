import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionsModel } from '../mockData';
import { RootState } from './store';

export type OptionsKeyModel = 'cryptoCurrency' | 'promo';

type OptionsStateModel = null | OptionsModel;
export interface PayState {
  step: number;
  data: {
    paymentMethod: string;
    cryptoCurrency: OptionsStateModel;
    promo: OptionsStateModel;
  };
}

const initialState: PayState = {
  step: 1,
  data: {
    paymentMethod: 'Crypto currency',
    cryptoCurrency: null,
    promo: null,
  },
};

export const PaySlice = createSlice({
  name: 'pay',
  initialState,
  reducers: {
    stepChange: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    optionChange: (
      state,
      action: PayloadAction<{ option: OptionsModel; name: OptionsKeyModel }>
    ) => {
      const { option, name } = action.payload;
      const stateOption = state.data[name];
      if (stateOption && stateOption.id === option.id) {
        state.data[name] = null;
      } else {
        state.data[name] = option;
      }
    },
  },
});

export const activeStep = (state: RootState) => state.pay.step;
export const payData = (state: RootState) => state.pay.data;

export const { stepChange, optionChange } = PaySlice.actions;

export default PaySlice.reducer;
