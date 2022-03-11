/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import PropTypes from 'prop-types';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  MovieRow, MovieRowList, MovieRowItem, IconMovieList,
} from '../List/styles';

export default function ListRow({ item, urlImage }) {
  const [arrow, setArrow] = useState(0);

  const scroll = Math.round(window.innerWidth / 2);

  function handleLeftArrow() {
    if (arrow < -scroll) {
      setArrow((prevState) => (prevState + scroll));
    } else {
      setArrow(0);
    }
  }

  function handleRightArrow(itemLenght) {
    if (arrow > (itemLenght * -150) + window.innerWidth) {
      setArrow((prevState) => (prevState - scroll));
    } else {
      setArrow((itemLenght * -150) + window.innerWidth - 80);
    }
  }
  return (
    <>
      <IconMovieList className="iconList" position="left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </IconMovieList>
      <IconMovieList className="iconList" position="right" onClick={() => handleRightArrow(item.items.results.length)}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </IconMovieList>
      <MovieRow>
        <MovieRowList style={{ marginLeft: `${arrow}px`, width: item.items.results.length * 150 }}>
          {item.items.results.length > 0 && item.items.results.map((itemList) => (
            <MovieRowItem key={Math.random()}>
              <img src={`${urlImage}${itemList.poster_path}`} alt={itemList.original_title} />
            </MovieRowItem>
          ))}
        </MovieRowList>
      </MovieRow>
    </>
  );
}
ListRow.propTypes = {
  urlImage: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};
