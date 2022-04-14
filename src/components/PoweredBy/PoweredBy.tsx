import { Text } from '../Texts';
import { BitPayLogo, PoweredByContainer } from './styles';

export const PoweredBy = () => {
  return (
    <PoweredByContainer>
      <Text>Powered by</Text>
      <BitPayLogo />
    </PoweredByContainer>
  );
};
