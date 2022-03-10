import PropTypes from 'prop-types';

import {
  Container, VerticalGradient, HorizontalGradient, InfoMovie, DescriptionMovie, InfoButtons,
} from './style';

export default function Destaque({ filmeDestaque }) {
  return (
    <Container item={filmeDestaque}>
      <VerticalGradient>
        <HorizontalGradient>
          <div className="titleMovie">
            {filmeDestaque.name}
          </div>
          <InfoMovie>
            <div className="infoPoints">
              {filmeDestaque.vote_average}
              {' '}
              Pontos
            </div>
            <div className="infoYear">
              {filmeDestaque.first_air_date.split('-')[0]}
            </div>
            <div className="infoSeasons">
              {filmeDestaque.number_of_seasons}
              {' '}
              Temporada
              {filmeDestaque.number_of_seasons === 1 ? '' : 's'}
            </div>
          </InfoMovie>
          <DescriptionMovie>
            <div className="infoOverview">
              {filmeDestaque.overview}
            </div>
            <InfoButtons>
              <a href={`/watch/${filmeDestaque.id}`} className="playMovie">▶  Assistir</a>
              <a href="/#" className="storageMovie">+  Minha Lista</a>
            </InfoButtons>
            <div className="infoGenres">
              <strong>Gêneros:</strong>
              {' '}
              {filmeDestaque.genres.map((genres, key) => (
                `${genres.name}${key < filmeDestaque.genres.length - 1
                  ? ', '
                  : ''}`
              ))}
            </div>
          </DescriptionMovie>
        </HorizontalGradient>
      </VerticalGradient>
    </Container>
  );
}

Destaque.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  filmeDestaque: PropTypes.object.isRequired,
};
