import styled from 'styled-components';

export type align = 'flex-end' | 'center' | 'flex-start';

type ButtonContainerProps = {
  align?: align;
  marginTop: number;
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: radial-gradient(
    100% 100% at 49.7% 100%,
    #4077c1 0%,
    #4077c1 100%
  );
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  width: 132px;
  align-self: ${({ align = 'flex-start' }) => align};
  margin-top: ${({ marginTop }) => marginTop}px;
`;

export const ButtonText = styled.p`
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;
