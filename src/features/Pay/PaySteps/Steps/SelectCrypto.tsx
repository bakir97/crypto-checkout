import { Button, Label } from '../../../../components';
import { cryptoCurrenciesMock } from '../../../../mockData';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { payData, stepChange } from '../../../../redux/PaySlice';
import { Options } from './components/Options';
import { TotalPay } from './components/TotalPay';

export const SelectCrypto = () => {
  const { cryptoCurrency } = useAppSelector(payData);
  const dispatch = useAppDispatch();

  const handleOnNextClick = () => {
    dispatch(stepChange(2));
  };

  return (
    <>
      <Label marginTop={39} marginBottom={19}>
        Select your crypto currency
      </Label>
      <Options options={cryptoCurrenciesMock} name='cryptoCurrency' />
      <TotalPay />
      <Button
        label='next'
        onClick={handleOnNextClick}
        align='flex-end'
        marginTop={54}
        disabled={!cryptoCurrency}
      />
    </>
  );
};
