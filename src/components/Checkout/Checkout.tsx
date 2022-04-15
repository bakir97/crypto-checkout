import { OptionContainer, OptionLabel, ValueContainer } from '../Option/styles';
import { CheckoutValue } from './styles';

type SelectedOptionProps = {
  label: string;
  value: number;
};

export const Checkout = ({ label, value }: SelectedOptionProps) => {
  return (
    <OptionContainer marginTop={0}>
      <ValueContainer>
        <OptionLabel>{label}</OptionLabel>
        <CheckoutValue>{value}</CheckoutValue>
      </ValueContainer>
    </OptionContainer>
  );
};
