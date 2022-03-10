import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ item }) => (`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`)};

`;

export const VerticalGradient = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90% );
`;

export const HorizontalGradient = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);

  .titleMovie {
    font-size: 60px;
    font-weight: bold;
  }
`;

export const InfoMovie = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  div {
    margin-right: 15px;
    display: inline-block;
  }
  .infoPoints{
    color: ${({ theme }) => theme.colors.points.main};
  }
  .infoYear {

  }
  .infoSeasons {

  }

`;

export const DescriptionMovie = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  width: 40%;
  .infoOverview {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .infoGenres {
    margin-top: 15px;
    font-size: 18px;
    color: #999;
  }
`;

export const InfoButtons = styled.div`
  a {
    margin-top: 15px;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;

    &:hover{
      opacity: 0.7;
    }
  }
  .playMovie {
    background: #fff;
    color: #000;
  }
  .storageMovie {
    background: #333;
    color: #fff;
  }
`;
