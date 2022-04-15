import { useAppDispatch } from '../../../../../../redux/hooks';
import { resetState } from '../../../../../../redux/PaySlice';
import { useStepChange } from '../../useStepChange';
import { PendingStatus } from './PendingStatus';
import { SuccessStatus } from './SuccessStatus';

type PayStatusesProps = {
  status: 'pending' | 'completed';
};

export const PayStatuses = ({ status }: PayStatusesProps) => {
  const dispatch = useAppDispatch();
  const { handleStepChange } = useStepChange();

  const handleHomePress = () => {
    dispatch(resetState());
  };

  switch (status) {
    case 'pending':
      return <PendingStatus handleOnNextClick={() => handleStepChange(5)} />;
    case 'completed':
      return <SuccessStatus handleHomePress={handleHomePress} />;

    default:
      return <PendingStatus handleOnNextClick={() => handleStepChange(5)} />;
  }
};
