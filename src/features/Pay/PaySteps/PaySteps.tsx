import { HeaderInfo } from '../../../components/HeaderInfo/HeaderInfo';
import { Steps } from './Steps';
import { PayStepsContainer } from './styles';

export const PaySteps = () => {
  return (
    <PayStepsContainer>
      <HeaderInfo
        title='Pay with Crypto'
        subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      />
      <Steps />
    </PayStepsContainer>
  );
};
