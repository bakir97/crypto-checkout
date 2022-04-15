import {
  CheckBigLogo,
  PaymentStatusContainer,
  SuccessContainer,
} from './styles';
import { Button, Text, Title } from '../../../../../../components';

type SuccessStatusProps = { handleHomePress: () => void };

export const SuccessStatus = ({ handleHomePress }: SuccessStatusProps) => {
  return (
    <PaymentStatusContainer>
      <SuccessContainer>
        <CheckBigLogo />
        <Title marginBottom={25}>Payment successful</Title>
        <Text textAlign='center'>
          Nullam placerat erat volutpat mollis congue. Nunc felis libero,
          interdum eu purus eget, posuere porttitor nisi. Suspendisse potenti.
          Etiam ut lectus augue.
        </Text>
        <Button
          label='HOME'
          onClick={handleHomePress}
          align='center'
          marginTop={42}
        />
      </SuccessContainer>
    </PaymentStatusContainer>
  );
};
