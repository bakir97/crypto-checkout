import { Text } from '../Texts';
import { SelectedOptionContainer, ValueContainer } from './styles';

export const SelectedOption = () => {
  return (
    <SelectedOptionContainer>
      <ValueContainer></ValueContainer>
      <Text fontWeight={500} color='#4077C1'>
        Change
      </Text>
    </SelectedOptionContainer>
  );
};
