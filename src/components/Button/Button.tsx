import { align, ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
  label: string;
  onClick: () => void;
  align?: align;
  marginTop?: number;
  disabled?: boolean;
  width?: number;
};

export const Button = ({
  label,
  onClick,
  align,
  marginTop = 0,
  disabled,
  width = 132,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      align={align}
      marginTop={marginTop}
      disabled={disabled}
      width={width}
    >
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};
