import { SelectedOption } from '../../../../../components';
import { useAppSelector } from '../../../../../redux/hooks';
import { payData } from '../../../../../redux/PaySlice';

export const SelectedValues = () => {
  const { paymentMethod } = useAppSelector(payData);

  return (
    <div>
      <SelectedOption value={paymentMethod} disabled />
    </div>
  );
};
