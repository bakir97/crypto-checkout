import styled from 'styled-components';

export const PayContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Shadow = styled.div`
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.05);
`;
