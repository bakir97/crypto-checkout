import styled from 'styled-components';
import bitpay from '../../assets/bitpay.png';

export const PoweredByContainer = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BitPayLogo = styled.img.attrs({
  src: `${bitpay}`,
})`
  width: 129px;
  height: 46px;
`;
