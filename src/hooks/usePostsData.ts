import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';
import axios from 'axios';
import {ICardData} from '../shared/CardsList';

export interface IPostsData {
  data: ICardData[];
}

export function usePostsData() {
  const [data, setData] = useState<ICardData[]>([]);
  const token = useContext(tokenContext);

  // useEffect(() => {
  //   axios.get('https://oauth.reddit.com/best', {
  //     headers: {Authorization: `bearer ${token}`}
  //   })
  //     .then((resp) => {
  //       const postsData: ICardData[] = resp.data.data.children
  //         .map((item: any) => ({
  //           data: {
  //             user: {name: item.data.author},
  //             text: item.data.title,
  //             postUrl: item.data.url,
  //             postImgUrl: item.data.thumbnail
  //           }
  //         }));
  //       setData(postsData)
  //     })
  //     .catch(console.log)
  // }, [token]);

  return [data];
}
