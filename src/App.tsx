import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {Text} from './shared/Text';
function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
        <br/>
        <Text size={20}>Label1</Text>
        <Text size={16}>Label2</Text>
        <Text size={14}>Label3</Text>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);
