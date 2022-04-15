import styled from 'styled-components';
import refresh from '../../../../../../assets/refresh.svg';
import checkBig from '../../../../../../assets/checkBig.svg';

export const PaymentStatusContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0599808);
  margin-top: 40px;
`;

export const PendingContainer = styled.div`
  padding: 55px 62px 30px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RefreshLogo = styled.img.attrs({
  src: refresh,
})`
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
`;
export const SuccessContainer = styled.div`
  padding: 50px 43px 46px 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckBigLogo = styled.img.attrs({
  src: checkBig,
})`
  margin-bottom: 26px;
  width: 64px;
  height: 64px;
`;
