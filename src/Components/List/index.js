import PropTypes from 'prop-types';

import {
  ListStyle, MovieRow, MovieRowList, MovieRowItem, TitleMovie,
} from './styles';

export default function List({ urlImage, children }) {
  return (
    <>
      {children.map((item) => (
        <ListStyle key={Math.random()}>

          <TitleMovie>{item.title}</TitleMovie>

          <MovieRow>
            <MovieRowList>
              {item.items.results.length > 0 && item.items.results.map((itemList) => (
                <MovieRowItem key={Math.random()}>
                  <img src={`${urlImage}${itemList.poster_path}`} alt={itemList.original_title} />
                </MovieRowItem>
              ))}
            </MovieRowList>
          </MovieRow>

        </ListStyle>
      ))}
    </>
  );
}

List.propTypes = {
  urlImage: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
