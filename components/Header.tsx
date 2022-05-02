import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '../styles/Colors';

const HeaderContainer = styled.header`
  background-color: ${Colors.primary};
  padding: 0.5rem 1rem;
  color: #fff;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  h1 {
    font-size: 24px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link href="/">
          <a>신청곡이요</a>
        </Link>
      </h1>
    </HeaderContainer>
  );
};

export default Header;
