import styled from 'styled-components';

import { Colors } from '../styles/Colors';

const FooterContainer = styled.footer`
  background-color: ${Colors.grey1};
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      Copyright 2022 Seunghyun Hwang, All rights reserved
    </FooterContainer>
  );
};

export default Footer;
