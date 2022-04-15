import { Button, Label } from '../../../../components';
import { promosMock } from '../../../../mockData';
import { useAppDispatch } from '../../../../redux/hooks';
import { stepChange } from '../../../../redux/PaySlice';
import { Options } from './components/Options';
import { TotalPay } from './components/TotalPay';

export const SelectPromo = () => {
  const dispatch = useAppDispatch();

  const handleOnNextClick = () => {
    dispatch(stepChange(2));
  };

  return (
    <>
      <TotalPay marginTop={48} />
      <Label marginTop={36} marginBottom={15}>
        Select Promo
      </Label>
      <Options options={promosMock} name='promo' />

      <Button
        label='next'
        onClick={handleOnNextClick}
        align='flex-end'
        marginTop={54}
      />
    </>
  );
};
