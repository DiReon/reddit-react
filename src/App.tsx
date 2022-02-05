import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {useToken} from './hooks/useToken';
import {tokenContext} from './context/tokenContext';
import {UserContextProvider} from './context/userContext';
import {PostsContextProvider} from './context/postsContext';

function AppComponent() {
  const [token] = useToken();
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header/>
            <Content>
              <CardsList/>
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent/>);
