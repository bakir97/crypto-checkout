import { Button, Label } from '../../../../components';
import { cryptoCurrenciesMock } from '../../../../mockData';
import { useAppSelector } from '../../../../redux/hooks';
import { payData } from '../../../../redux/PaySlice';
import { Options } from './components/Options';
import { TotalPay } from './components/TotalPay';
import { useStepChange } from './useStepChange';

export const SelectCrypto = () => {
  const { cryptoCurrency } = useAppSelector(payData);
  const { handleStepChange } = useStepChange();

  return (
    <>
      <Label marginTop={39} marginBottom={19}>
        Select your crypto currency
      </Label>
      <Options options={cryptoCurrenciesMock} name='cryptoCurrency' />
      <TotalPay />
      <Button
        label='next'
        onClick={() => handleStepChange(2)}
        align='flex-end'
        marginTop={54}
        disabled={!cryptoCurrency}
      />
    </>
  );
};
