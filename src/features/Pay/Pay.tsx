import { SideInfo } from '../../components/SideInfo';
import { PaySteps } from './PaySteps';
import { PayContainer } from './styles';

export const Pay = () => {
  return (
    <PayContainer>
      <PaySteps />
      <SideInfo />
    </PayContainer>
  );
};
