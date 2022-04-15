import React, {useEffect, useState} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';

export interface IUser {
  name: string;
  avatarUrl: string;
}

export interface ICardData{
  data: {
    key: string;
    text: string;
    postUrl: string;
    user: IUser;
    postDate: string,
    postImgUrl: string
  }
}

const mockCardData = {
  text: 'Следует отметить, что новая модель организационной деятельности...',
  postUrl: '#Some_URL',
  user: {
    name: 'Дмитрий Гришин',
    avatarUrl: 'https://cdn.dribbble.com/users/1338391/avatars/small/6400fbd7246ce73a2fab2ab9e3b8453b.jpg?1622096188',
  },
  postDate: '2021/01/10 04:05:00',
  postImgUrl: 'https://cdn.dribbble.com/users/59947/screenshots/17223814/media/6b4fff5aa2bf7e956386cbcfeb5e6513.jpg'
}

export function CardsList() {
  // const postsData: ICardData[] = useContext(postsContext);
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<ICardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');

  useEffect(() => {
    if (!token) return;

    async function load() {
      setLoading(true);
      try {
        const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/best', {
          headers: {Authorization: `bearer ${token}`}
        })
        const result = children.map((item: any) => ({
          data: {
            key: item.data.id,
            user: {name: item.data.author},
            text: item.data.title,
            postUrl: item.data.url,
            postImgUrl: item.data.thumbnail
          }
        }));
        setLoading(false);
        console.log(children);
        setPosts(result);
      }
      catch (error) {
        setLoading(false);
        setErrorLoading(String(error));
      }
    }
    load();
  }, [token])
  return (
    <ul className={styles.cardsList}>
      { posts.map(item => <Card key={item.data.key} data={item.data}/>) }
      {/*<Card data={mockCardData}/>*/}
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      { loading && (<div  style={{ textAlign: 'center'}}>Загрузка...</div>)}
      {errorLoading && (<div role="alert" style={{ textAlign: 'center'}}>{errorLoading}</div>)}
    </ul>
  );
}
