import {
  OptionContainer,
  ValueContainer,
  CheckContainer,
  CheckIcon,
  Circle,
  OptionLabel,
} from './styles';

type OptionProps = {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
  marginTop?: number;
  hasBorder: boolean;
  hasShadow: boolean;
};

export const Option = ({
  label,
  onClick,
  isSelected = false,
  marginTop = 0,
  hasBorder,
  hasShadow,
}: OptionProps) => {
  const renderCheck = () => {
    return isSelected ? (
      <CheckContainer>
        <CheckIcon />
      </CheckContainer>
    ) : (
      <Circle />
    );
  };

  return (
    <OptionContainer
      cursor='pointer'
      onClick={onClick}
      marginTop={marginTop}
      hasBorder={hasBorder}
      hasShadow={hasShadow}
    >
      <ValueContainer>
        {renderCheck()}
        <OptionLabel>{label}</OptionLabel>
      </ValueContainer>
    </OptionContainer>
  );
};
