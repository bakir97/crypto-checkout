import styled from 'styled-components';

export const Text = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ color = '#53545A' }) => color};
`;

type SubTitleProps = { marginBottom?: number };

export const SubTitle = styled.h3<SubTitleProps>`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${({ color = '#3F4048' }) => color};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom};
`;
