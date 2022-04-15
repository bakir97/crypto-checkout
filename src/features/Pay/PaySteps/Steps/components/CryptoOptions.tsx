import { Option } from '../../../../../components';
import {
  cryptoCurrenciesMock,
  cryptoCurrencyModel,
} from '../../../../../mockData';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { cryptoChange, payData } from '../../../../../redux/PaySlice';
import { Shadow } from '../../../styles';

export const CryptoOptions = () => {
  const { cryptoCurrency } = useAppSelector(payData);
  const dispatch = useAppDispatch();

  const handleOptionClick = (crypto: cryptoCurrencyModel) => {
    dispatch(cryptoChange(crypto));
  };

  const renderOptions = () => {
    return cryptoCurrenciesMock.map((crypto, index) => {
      const { id, label } = crypto;
      const isSelected = cryptoCurrency?.id === id;
      const isLastItem = index === cryptoCurrenciesMock.length - 1;

      return (
        <Option
          key={id}
          label={label}
          onClick={() => handleOptionClick(crypto)}
          isSelected={isSelected}
          hasBorder={!isLastItem}
          hasShadow={false}
        />
      );
    });
  };

  return <Shadow>{renderOptions()}</Shadow>;
};
