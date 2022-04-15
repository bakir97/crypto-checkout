import { useAppSelector } from '../../../../redux/hooks';
import { activeStep } from '../../../../redux/PaySlice';
import { SelectCrypto } from './SelectCrypto';
import { SelectedValues } from './components/SelectedValues';

export const Steps = () => {
  const count = useAppSelector(activeStep);
  const renderStep = () => {
    switch (count) {
      case 1:
        return <SelectCrypto />;

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
