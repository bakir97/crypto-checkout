import { useState } from 'react';

export const useCopy = (text: string) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };
  return {
    isCopied,
    handleCopyText,
  };
};
