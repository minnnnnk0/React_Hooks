import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return;
  }
  const handle = () => {
    // 마우스가 위로 벗어날 때만 조건 추가
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

export default useBeforeLeave;
