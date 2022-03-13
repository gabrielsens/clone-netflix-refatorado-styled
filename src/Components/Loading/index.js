import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';

import LoadingGif from '../../assets/images/netflix-startup.gif';

export default function Loading({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <img src={LoadingGif} alt="Loading startup netflix" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
