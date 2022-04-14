import { PoweredBy } from '../PoweredBy';
import { SubTitle, Text } from '../Texts';
import { SideContainer } from './styles';

export const SideInfo = () => {
  return (
    <SideContainer>
      <SubTitle marginBottom={24}>Easy, fast and secure payments</SubTitle>
      <Text>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Text>
      <PoweredBy />
    </SideContainer>
  );
};
