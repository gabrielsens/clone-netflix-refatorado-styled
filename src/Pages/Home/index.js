import { useEffect, useState } from 'react';

import Tmdb from '../../Components/Tmdb';
import Header from '../../Components/Header';

import { Lists } from './style';
import List from '../../Components/List';
import Destaque from '../../Components/Destaque';
import { Footer } from '../../Components/Footer';
import Loading from '../../Components/Loading';

export default function Home() {
  const [destaque, setDestaque] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlImage = 'https://image.tmdb.org/t/p/w300';
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const list = await Tmdb.getHomeList();
        setMovieList(list);

        // Pegando o featured
        const originals = list.filter((i) => i.slug === 'originals');
        const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        const chosen = originals[0].items.results[randomChosen];
        const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setDestaque(chosenInfo);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Header />
      {destaque && <Destaque filmeDestaque={destaque} />}
      <Lists>
        <List urlImage={urlImage}>
          {movieList}
        </List>
      </Lists>
      <Footer>
        Desenvolvido por
        {' '}
        <strong>Gabriel Sens</strong>
        {' '}
        de acordo com material da B7Web.
      </Footer>
    </>
  );
}
