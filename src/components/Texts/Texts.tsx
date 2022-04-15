import styled from 'styled-components';

type TitleProps = { marginBottom?: number };
type TextProps = {
  fontWeight?: number;
  marginBottom?: number;
  textAlign?: 'left' | 'center' | 'right';
};
type LabelProps = { marginBottom?: number; marginTop?: number };

export const Text = styled.p<TextProps>`
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  font-size: 14px;
  line-height: 22px;
  color: ${({ color = '#53545A' }) => color};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

export const Label = styled.h3<LabelProps>`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${({ color = '#3F4048' }) => color};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
`;

export const Title = styled.h1<TitleProps>`
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  color: ${({ color = '#3F4048' }) => color};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
`;
