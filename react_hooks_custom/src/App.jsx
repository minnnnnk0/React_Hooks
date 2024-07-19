import useInput from './hooks/useInput';

const App = () => {
  // useInput
  const maxLen = (value) => value.length <= 10;
  const inputValue = useInput('', maxLen);

  return <input placeholder="입력해주세요" {...inputValue} />;
};

export default App;
