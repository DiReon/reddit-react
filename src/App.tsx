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
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store';

const store = createStore(rootReducer, composeWithDevTools())

function AppComponent() {
  const [token] = useToken();
  const TokenProvider = tokenContext.Provider;
  return (
    <Provider store={store}>
      <TokenProvider value={token}>
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
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);
