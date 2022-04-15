import { Option } from '../../../../../components';
import { cryptoCurrenciesMock } from '../../../../../mockData';

export const CryptoOptions = () => {
  return cryptoCurrenciesMock.map((crypto) => <Option />);
};
