import {
  OptionContainer,
  ValueContainer,
  CheckContainer,
  CheckIcon,
} from './styles';

type OptionProps = {
  value: string;
  onClick: () => void;
  isActive: boolean;
};

export const Option = ({ value, onClick, isActive }: OptionProps) => {
  return (
    <OptionContainer cursor='pointer' onClick={onClick}>
      <ValueContainer>
        {isActive ? (
          <CheckContainer>
            <CheckIcon />
          </CheckContainer>
        ) : null}
        {value}
      </ValueContainer>
    </OptionContainer>
  );
};
