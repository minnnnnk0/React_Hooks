import useClick from './hooks/useClick';
import useInput from './hooks/useInput';
import useTab from './hooks/useTab';
import useTitle from './hooks/useTitle';

const App = () => {
  // useInput
  const maxLen = (value) => value.length <= 10;
  const inputValue = useInput('', maxLen);

  // useTab
  const { currentItem, changeItem } = useTab(0, content);

  // useTitle
  const titleUpdate = useTitle('Loading...');
  setTimeout(() => titleUpdate('Home'), 3000);

  // useClick
  const sayHello = () => console.log('say Hello');
  const title = useClick(sayHello);

  return (
    <>
      <div>
        {/* useInput */}
        <div>
          <input placeholder="입력해주세요" {...inputValue} />
        </div>

        <hr />
        {/* useTab */}
        <div>
          {content.map((section, index) => (
            <button key={index} onClick={() => changeItem(index)}>
              {section.tab}
            </button>
          ))}
          <div>{currentItem.content}</div>
        </div>

        <hr />
        {/* useClick */}
        <div>
          <h1 ref={title}>Hi</h1>
        </div>
      </div>
    </>
  );
};

export default App;

const content = [
  {
    tab: 'section 1',
    content: 'The content of Section 1',
  },
  {
    tab: 'section 2',
    content: 'The content of Section 2',
  },
  {
    tab: 'section 3',
    content: 'The content of Section 3',
  },
];
