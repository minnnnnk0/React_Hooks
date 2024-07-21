// https://developer.mozilla.org/ko/docs/Web/API/Notification

const useNotification = (title, option) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotify = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };

  return fireNotify;
};
export default useNotification;
