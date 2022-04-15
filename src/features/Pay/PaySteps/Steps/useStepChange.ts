import { useAppDispatch } from '../../../../redux/hooks';
import { stepChange } from '../../../../redux/PaySlice';

export const useStepChange = () => {
  const dispatch = useAppDispatch();

  const handleStepChange = (step: number) => {
    dispatch(stepChange(step));
  };

  return {
    handleStepChange,
  };
};
