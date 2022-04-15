import { Button, Label } from '../../../../components';
import { TextCopy } from '../../../../components/TextCopy';
import { useAppDispatch } from '../../../../redux/hooks';
import { stepChange } from '../../../../redux/PaySlice';
import { TotalPay } from './components/TotalPay';

export const SendPayment = () => {
  const dispatch = useAppDispatch();

  const handleOnNextClick = () => {
    dispatch(stepChange(4));
  };

  return (
    <>
      <TotalPay marginTop={48} />
      <Label marginTop={36} marginBottom={15}>
        Select Promo
      </Label>
      <TextCopy text='0xa81fsdjka7fds2231kx09766' />
      <Button
        label='next'
        onClick={handleOnNextClick}
        align='flex-end'
        marginTop={42}
      />
    </>
  );
};
