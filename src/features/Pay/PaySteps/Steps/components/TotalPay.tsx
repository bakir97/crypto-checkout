import { Checkout, Label } from '../../../../../components';

export const TotalPay = ({ marginTop = 29 }) => {
  return (
    <>
      <Label marginTop={marginTop} marginBottom={19}>
        Total
      </Label>
      <Checkout label={'BTC'} value={0.0241} />
    </>
  );
};
