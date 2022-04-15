import { Button, Label } from '../../../../components';
import { promosMock } from '../../../../mockData';
import { useAppSelector } from '../../../../redux/hooks';
import { payData } from '../../../../redux/PaySlice';
import { Options } from './components/Options';
import { TotalPay } from './components/TotalPay';
import { useStepChange } from './useStepChange';

export const SelectPromo = () => {
  const { promo } = useAppSelector(payData);
  const { handleStepChange } = useStepChange();

  return (
    <>
      <TotalPay marginTop={48} />
      <Label marginTop={36} marginBottom={15}>
        Select Promo
      </Label>
      <Options options={promosMock} name='promo' />
      <Button
        label='next'
        onClick={() => handleStepChange(3)}
        align='flex-end'
        marginTop={48}
        disabled={!promo}
      />
    </>
  );
};
