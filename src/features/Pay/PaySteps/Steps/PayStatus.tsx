import { useAppSelector } from '../../../../redux/hooks';
import { activeStep } from '../../../../redux/PaySlice';
import { PayStatuses } from './components/PayStatuses';

export const PayStatus = () => {
  const currentStep = useAppSelector(activeStep);

  const status = currentStep === 4 ? 'pending' : 'completed';
  return <PayStatuses status={status} />;
};
