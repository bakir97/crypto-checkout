import styled from 'styled-components';
import bitcoin from '../../../assets/bitcoin.png';

export const PayStepsContainer = styled.div`
  flex: 1.36;
  background-color: #f9f9f9;
  padding: 38px 50px;
  display: flex;
  flex-direction: column;
`;

export const SelectCryptoContainer = styled.div`
  margin-top: 20px;
`;

export const BitcoinLogo = styled.img.attrs({
  src: bitcoin,
})`
  width: 25px;
  height: 25px;
  margin-right: 11px;
`;
