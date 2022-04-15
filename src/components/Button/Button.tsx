import { align, ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
  label: string;
  onClick: () => void;
  align?: align;
  marginTop?: number;
  disabled?: boolean;
};

export const Button = ({
  label,
  onClick,
  align,
  marginTop = 0,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      align={align}
      marginTop={marginTop}
      disabled={disabled}
    >
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};
