import { useAppSelector } from '../../../../redux/hooks';
import { activeStep } from '../../../../redux/PaySlice';
import { SelectCrypto } from './SelectCrypto';

export const Steps = () => {
  const count = useAppSelector(activeStep);

  switch (count) {
    case 1:
      return <SelectCrypto />;

    default:
      return <SelectCrypto />;
  }
};
