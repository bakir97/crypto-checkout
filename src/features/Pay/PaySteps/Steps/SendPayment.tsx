import { Button, Label } from '../../../../components';
import { TextCopy } from '../../../../components/TextCopy';
import { TotalPay } from './components/TotalPay';
import { useStepChange } from './useStepChange';

export const SendPayment = () => {
  const { handleStepChange } = useStepChange();

  return (
    <>
      <TotalPay marginTop={48} />
      <Label marginTop={36} marginBottom={15}>
        Select Promo
      </Label>
      <TextCopy text='0xa81fsdjka7fds2231kx09766' />
      <Button
        label='next'
        onClick={() => handleStepChange(4)}
        align='flex-end'
        marginTop={42}
      />
    </>
  );
};
