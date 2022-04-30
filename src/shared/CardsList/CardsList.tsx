import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import { Outlet } from 'react-router-dom';

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
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = useState<ICardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setPosts([]);
  }, [])

  async function load() {
    setLoading(true);
    try {
      const response = await axios.get('https://oauth.reddit.com/r/popular/best.json?sr_detail=true', {
        headers: {Authorization: `bearer ${token}`},
        params: {
          limit: 20,
          after: nextAfter,
        }
      })
      const {data: {data: {after, children}}} = response;
      const result = children.map((item: any) => ({
        data: {
          key: item.data.id,
          user: {name: item.data.author, avatarUrl: item.data.sr_detail.icon_img},
          text: item.data.title,
          postUrl: item.data.url,
          postImgUrl: item.data.url
        }
      }));

      setNextAfter(after);
      setPosts(prevChildren => prevChildren.concat(...result));
    }
    catch (error) {
      setErrorLoading(String(error));
    }
    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && counter < 2) {
        setCounter(counter + 1);
        load();
      }
    }, {
      rootMargin: '10px'
    })
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, nextAfter, token])


  function loadMore() {
    load();
    setCounter(0);
  }

  return (
    <div>
      <ul className={styles.cardsList}>
        { posts.map(item => <Card key={item.data.key} data={item.data}/>) }
        {posts.length === 0 && !loading && !errorLoading && (
          <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
        )}
        {(counter > 1) && (<button className={styles.button} onClick={loadMore}>Загрузить еще</button>)}

        <div ref={bottomOfList} />

        { loading && (<div  style={{ textAlign: 'center'}}>Загрузка...</div>)}

        {errorLoading && (<div role="alert" style={{ textAlign: 'center'}}>{errorLoading}</div>)}
      </ul>
      <Outlet />
    </div>
  );
}
