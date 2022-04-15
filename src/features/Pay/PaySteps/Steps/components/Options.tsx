import { Option } from '../../../../../components';
import { OptionsModel } from '../../../../../mockData';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import {
  optionChange,
  OptionsKeyModel,
  payData,
} from '../../../../../redux/PaySlice';
import { Shadow } from '../../../styles';

type OptionsProps = {
  options: OptionsModel[];
  name: OptionsKeyModel;
};

export const Options = ({ options, name }: OptionsProps) => {
  const data = useAppSelector(payData);
  const dispatch = useAppDispatch();

  const handleOptionClick = (option: OptionsModel) => {
    dispatch(optionChange({ option, name }));
  };

  const renderOptions = () => {
    return options.map((option, index) => {
      const { id, label } = option;
      const isSelected = data[name]?.id === id;
      const isLastItem = index === options.length - 1;

      return (
        <Option
          key={id}
          label={label}
          onClick={() => handleOptionClick(option)}
          isSelected={isSelected}
          hasBorder={!isLastItem}
          hasShadow={false}
        />
      );
    });
  };

  return <Shadow>{renderOptions()}</Shadow>;
};
