import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {getValue} from './utils/react/pickFromSynteticEvent';
import {MyHooks} from './HooksExample';

function AppComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/*<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>*/}
        {/*<input type="text" onChange={getValue(setTitle)} />*/}
        {/*{isVisible && <MyHooks title={title} id="11" />}*/}
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
