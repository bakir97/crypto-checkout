import { SelectedOption } from '../../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { activeStep, payData, stepChange } from '../../../../../redux/PaySlice';
import { BitcoinLogo } from '../../styles';

export const SelectedValues = () => {
  const { paymentMethod, cryptoCurrency } = useAppSelector(payData);
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(activeStep);

  const handleOptionPress = (step: number) => {
    dispatch(stepChange(step));
  };

  return (
    <div>
      <SelectedOption value={paymentMethod} disabled LeftIcon={BitcoinLogo} />
      {currentStep > 1 && (
        <SelectedOption
          value={cryptoCurrency?.label!}
          onClick={() => handleOptionPress(1)}
        />
      )}
    </div>
  );
};
