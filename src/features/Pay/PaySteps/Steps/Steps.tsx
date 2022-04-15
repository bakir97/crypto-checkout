import { useAppSelector } from '../../../../redux/hooks';
import { activeStep } from '../../../../redux/PaySlice';
import { SelectCrypto } from './SelectCrypto';
import { SelectedValues } from './components/SelectedValues';
import { SelectPromo } from './SelectPromo';
import { SendPayment } from './SendPayment';
import { PayStatus } from './PayStatus';

export const Steps = () => {
  const count = useAppSelector(activeStep);
  const renderStep = () => {
    switch (count) {
      case 1:
        return <SelectCrypto />;
      case 2:
        return <SelectPromo />;
      case 3:
        return <SendPayment />;
      case 4:
      case 5:
        return <PayStatus />;

      default:
        return <SelectCrypto />;
    }
  };
  return (
    <>
      {count < 4 ? <SelectedValues /> : null}
      {renderStep()}
    </>
  );
};
