import { Button } from '../Button';
import { Text } from '../Texts';
import { CopyBox, CopyContainer } from './styles';
import { useCopy } from './useCopy';

type TextCopyProps = { text: string };

export const TextCopy = ({ text }: TextCopyProps) => {
  const { handleCopyText, isCopied } = useCopy(text);

  return (
    <CopyContainer>
      <CopyBox>
        <Text color='#787A81'>{text}</Text>
      </CopyBox>
      <Button
        label={isCopied ? 'COPIED!' : 'COPY'}
        onClick={handleCopyText}
        width={100}
      />
    </CopyContainer>
  );
};
