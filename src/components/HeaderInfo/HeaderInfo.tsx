import { Text, Title } from '../Texts';

type HeaderInfoProps = {
  title: string;
  subTitle: string;
};

export const HeaderInfo = ({ title, subTitle }: HeaderInfoProps) => {
  return (
    <div>
      <Title marginBottom={10}>{title}</Title>
      <Text>{subTitle}</Text>
    </div>
  );
};
