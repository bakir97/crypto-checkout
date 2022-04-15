import { Button, Label } from '../../../../components';
import { useAppDispatch } from '../../../../redux/hooks';
import { stepChange } from '../../../../redux/PaySlice';
import { CryptoOptions } from './components/CryptoOptions';
import { TotalPay } from './components/TotalPay';

export const SelectCrypto = () => {
  const dispatch = useAppDispatch();

  const handleOnNextClick = () => {
    dispatch(stepChange(2));
  };

  return (
    <>
      <Label marginTop={39} marginBottom={19}>
        Select your crypto currency
      </Label>
      <CryptoOptions />
      <TotalPay />
      <Button
        label='next'
        onClick={handleOnNextClick}
        align='flex-end'
        marginTop={54}
      />
    </>
  );
};
