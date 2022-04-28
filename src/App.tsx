import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import './main.global.css';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer, setToken} from './store/reducer';
import thunk from 'redux-thunk';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Post} from './shared/Post';
import {NotFound} from './shared/NotFound';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const token = window.__token__;
    store.dispatch(setToken(token));
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [])

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header/>
            <Content>
              <Routes>
                <Route path="/" element={<Navigate replace to="/posts"/>}/>
                <Route path="/auth" element={<Navigate replace to="/posts"/>}/>
                <Route path="/posts" element={<CardsList/>}>
                  <Route path=":id" element={<Post/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);
