import styled from 'styled-components';

export const Change = styled.button`
  all: unset;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
