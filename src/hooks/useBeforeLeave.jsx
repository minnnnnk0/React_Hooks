import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return;
  }
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

export default useBeforeLeave;
