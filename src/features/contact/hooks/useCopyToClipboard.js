import {useEffect, useState} from 'react';

const feedbackDurationMs = 1800;

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }
    const timer = setTimeout(() => setIsCopied(false), feedbackDurationMs);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const copy = async (text, fallbackUrl) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    }
    catch {
      window.location.href = fallbackUrl;
    }
  };

  return {isCopied, copy};
}

export default useCopyToClipboard;
