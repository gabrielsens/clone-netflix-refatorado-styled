import { useEffect, useState } from 'react';

import Tmdb from '../../Components/Tmdb';

import { Lists } from './style';
import List from '../../Components/List';
import Destaque from '../../Components/Destaque';

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const urlImage = 'https://image.tmdb.org/t/p/w300';
  useEffect(() => {
    (async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    })();
  }, []);

  return (
    <>
      <Destaque />
      <Lists>
        <List urlImage={urlImage}>
          {movieList}
        </List>
      </Lists>
    </>
  );
}
