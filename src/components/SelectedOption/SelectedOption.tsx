import {
  OptionContainer,
  ValueContainer,
  CheckContainer,
  CheckIcon,
} from '../Option/styles';
import { Text } from '../Texts';
import { Change } from './styles';

type SelectedOptionProps = {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
};

export const SelectedOption = ({
  value,
  disabled,
  onClick,
  leftIcon,
}: SelectedOptionProps) => {
  return (
    <OptionContainer height={52}>
      <ValueContainer>
        {leftIcon ?? (
          <CheckContainer>
            <CheckIcon />
          </CheckContainer>
        )}
        <Text fontWeight={500} color='#3F4048'>
          {value}
        </Text>
      </ValueContainer>
      <Change disabled={disabled} onClick={onClick}>
        <Text fontWeight={500} color='#4077C1'>
          Change
        </Text>
      </Change>
    </OptionContainer>
  );
};
