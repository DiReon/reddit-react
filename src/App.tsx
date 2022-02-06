import React, {useState} from 'react';
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
import {commentContext} from './context/commentContext';

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');
  const CommentProvider = commentContext.Provider;
  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue
    }}>
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
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent/>);
