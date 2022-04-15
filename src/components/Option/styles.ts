import styled from 'styled-components';
import check from '../../assets/check.png';

type OptionContainerProps = {
  height?: number;
  cursor?: string;
  marginTop?: number;
  hasBorder?: boolean;
  hasShadow?: boolean;
};

export const OptionContainer = styled.div<OptionContainerProps>`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 20px;
  box-shadow: ${({ hasShadow = true }) =>
    hasShadow && '0px 1px 10px rgba(0, 0, 0, 0.05)'};
  height: ${({ height = 70 }) => height}px;
  align-items: center;
  margin-top: ${({ marginTop = 20 }) => marginTop}px;
  cursor: ${({ cursor = 'normal' }) => cursor};
  border-bottom: ${({ hasBorder }) => hasBorder && '1px solid #EDEFF0'};
  background-color: #fff;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
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

export const OptionLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #53545a;
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Circle = styled.div`
  background-color: #edeff0;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  margin-right: 11px;
`;
