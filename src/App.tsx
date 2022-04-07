import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {UserContextProvider} from './context/userContext';
import {PostsContextProvider} from './context/postsContext';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store/reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

function AppComponent() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);
