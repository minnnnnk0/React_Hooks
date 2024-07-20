import useBeforeLeave from './hooks/useBeforeLeave';
import useClick from './hooks/useClick';
import useConfirm from './hooks/useConfirm';
import useFadeIn from './hooks/useFadeIn';
import useInput from './hooks/useInput';
import useNetwork from './hooks/useNetwork';
import usePreventLeave from './hooks/usePreventLeave';
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

  // useConfirm
  const deleteWord = () => console.log('Deleting the word');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWord, abort);

  // usePreventLeave
  const { enablePrevent, disablePrevent } = usePreventLeave();

  // useBeforeLeave
  const begForLife = () => console.log('Plz dont go');
  useBeforeLeave(begForLife);

  // useFadeIn
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  // useNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'we are offline now');
  };
  const onLine = useNetwork(handleNetworkChange);

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

        <hr />
        {/* useConfrim */}
        <div>
          <button onClick={confirmDelete}>Delete the word</button>
        </div>

        <hr />
        {/* usePreventLeave */}
        <div>
          <button onClick={enablePrevent}>Protect</button>
          <button onClick={disablePrevent}>Unprotect</button>
        </div>

        <hr />
        {/* useFadeIn */}
        <div>
          <h1 {...fadeInH1}>Fade-In Animation</h1>
          <p {...fadeInP}>Customizing Fade-In</p>
        </div>

        <hr />
        {/* useNetwork */}
        <div>
          <h1>{onLine ? 'Online' : 'Offline'}</h1>
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
