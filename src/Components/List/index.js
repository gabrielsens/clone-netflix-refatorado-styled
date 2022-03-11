/* eslint-disable react/jsx-no-bind */

import PropTypes from 'prop-types';
import ListRow from '../ListRow';

import {
  ListStyle, TitleMovie,
} from './styles';

export default function List({ urlImage, children }) {
  return (
    <>
      {children.map((item) => (
        <ListStyle key={Math.random()}>

          <TitleMovie>{item.title}</TitleMovie>
          <ListRow item={item} urlImage={urlImage} />
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
