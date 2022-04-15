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
  LeftIcon?: React.FunctionComponent;
};

export const SelectedOption = ({
  value,
  disabled,
  onClick,
  LeftIcon,
}: SelectedOptionProps) => {
  return (
    <OptionContainer height={52}>
      <ValueContainer>
        {LeftIcon ? (
          <LeftIcon />
        ) : (
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
