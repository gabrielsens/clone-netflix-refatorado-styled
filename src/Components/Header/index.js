import { useEffect, useState } from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

const Container = styled.header`
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 30px 0 30px;
  background: ${({ backgroundHeader }) => (backgroundHeader ? 'rgb(20, 20, 20)' : 'transparent')};
  //background-color: rgb(20, 20, 20);
  z-index: 10;
  transition: all ease .3s;
`;

const Logo = styled.div`
  a {
    img {
      max-height: 30px;
    }
  }
`;

export default function Header() {
  const [backgroundHeader, setBackgroundHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBackgroundHeader(true);
      } else {
        setBackgroundHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <Container backgroundHeader={backgroundHeader}>
      <Logo>
        <a href="/">
          <img alt="Logo" src={logo} />
        </a>
      </Logo>
      <Logo>
        <a href="/user">
          <img alt="Logo" src={user} style={{ borderRadius: '4px' }} />
        </a>
      </Logo>
    </Container>
  );
}
