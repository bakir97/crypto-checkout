import { align, ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
  label: string;
  onClick: () => void;
  align?: align;
  marginTop?: number;
};

export const Button = ({
  label,
  onClick,
  align,
  marginTop = 0,
}: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} align={align} marginTop={marginTop}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};
