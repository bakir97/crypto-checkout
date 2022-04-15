import styled from 'styled-components';
import check from '../../assets/check.png';

export const SelectedOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 20px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
  height: 52px;
  align-items: center;
  margin-top: 20px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Change = styled.button`
  all: unset;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const CheckContainer = styled.div`
  background-color: #4077c1;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`;

export const CheckIcon = styled.img.attrs({
  src: check,
})``;
