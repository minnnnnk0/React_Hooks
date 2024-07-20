import { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();

  // 중복으로 검사하는 부분을 하나로 통합
  const runCb = (isfull) => {
    if (callback && typeof callback === 'function') {
      callback(isfull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    runCb(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
export default useFullscreen;
