import { PoweredBy } from '../PoweredBy';
import { Label, Text } from '../Texts';
import { SideContainer } from './styles';

export const SideInfo = () => {
  return (
    <SideContainer>
      <Label marginBottom={24}>Easy, fast and secure payments</Label>
      <Text>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Text>
      <PoweredBy />
    </SideContainer>
  );
};
