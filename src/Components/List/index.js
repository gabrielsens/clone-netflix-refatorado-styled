/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import Tmdb from '../Tmdb';
import { ListStyle, MovieRow } from './styles';

export default function List() {
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
      {movieList.map((item, key) => (
        <ListStyle key={key}>

          <h2>{item.title}</h2>

          <MovieRow>
            {item.items.results.length > 0 && item.items.results.map((itemList) => (
              <img src={`${urlImage}${itemList.poster_path}`} key={Math.random()} alt={itemList.original_title} />
            ))}
          </MovieRow>

        </ListStyle>
      ))}
    </>
  );
}
