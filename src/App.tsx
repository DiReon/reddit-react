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
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);
