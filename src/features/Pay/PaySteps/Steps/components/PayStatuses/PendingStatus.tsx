import {
  PaymentStatusContainer,
  PendingContainer,
  RefreshLogo,
} from './styles';
import { Button, Text, Title } from '../../../../../../components';

type PendingStatusProps = { handleOnNextClick: () => void };

export const PendingStatus = ({ handleOnNextClick }: PendingStatusProps) => {
  return (
    <>
      <PaymentStatusContainer>
        <PendingContainer>
          <RefreshLogo />
          <Title marginBottom={25}>Transaction pending</Title>
          <Text marginBottom={11}>Transaction ID</Text>
          <Text marginBottom={28} fontWeight={500} color='#4077C1'>
            321423543543h543j5h4jhko23jo423j4o32dd
          </Text>
          <Text textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod...
          </Text>
        </PendingContainer>
      </PaymentStatusContainer>
      <Button
        label='REFRESH'
        onClick={handleOnNextClick}
        align='center'
        marginTop={42}
      />
    </>
  );
};
