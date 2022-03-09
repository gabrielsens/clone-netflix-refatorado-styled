import styled from 'styled-components';

export const ListStyle = styled.div`

`;

export const MovieRow = styled.div`
  overflow-x:hidden;
  padding-left: 30px;
`;

export const MovieRowList = styled.div`
  width: 9999999px;
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
