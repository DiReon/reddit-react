import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {GenericList} from './shared/MyList';
import {generateId, generateRandomIndex} from './utils/react/generateRandomIndex';
import {merge} from './utils/js/merge';
import {Dropdown} from './shared/Dropdown';

const LIST = [
  {text: 'some'},
  {text: 'some other'},
  {text: 'some'}
].map(generateId)


function AppComponent() {
  // const [list, setList] = React.useState(LIST);
  //
  // const handleItemClick = (id: string) => {
  //   console.log('set list');
  //   setList(list.filter((item) => item.id !== id));
  // }
  // const addListItem = () => {
  //   console.log('adding item...');
  //   setList(list.concat(generateId({text: generateRandomIndex()})) )
  // }
  //
  // const [isVisible, setIsVisible] = React.useState(false);
  // const [title, setTitle] = React.useState('');
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
        {/*<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>*/}
        {/*<input type="text" onChange={getValue(setTitle)} />*/}
        {/*{isVisible && <MyHooks title={title} id="11" />}*/}
        {/*<button onClick={addListItem}>Add item</button>*/}
        <br/>
        <div style={{padding: '20px'}}>
          <Dropdown onClose={() => console.log('closed')} onOpen={() => console.log('opened')} isOpen={false} button={<button>List</button>}>
            <CardsList/>
          </Dropdown>
        </div>
        {/*<GenericList list={list.map(merge({onClick: handleItemClick}))}/>*/}
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);
