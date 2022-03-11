import styled from 'styled-components';

export const ListStyle = styled.div`
  &:hover {
    .iconList {
      opacity: 1;
    }
  }
`;

export const MovieRow = styled.div`
  overflow-x:hidden;
  padding-left: 30px;
`;

export const MovieRowList = styled.div`
`;

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;

  img {
    cursor: pointer;
    width: 100%;
    transform: scale(0.90);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const TitleMovie = styled.h2`
  margin: 0px 0px 0px 30px;
`;

export const IconMovieList = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0,0,0, 0.6);
  left: ${({ position }) => (position === 'left' ? 0 : '')};
  right: ${({ position }) => (position === 'right' ? 0 : '')};
  z-index: 9;
  display: flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all ease .2s;
`;
