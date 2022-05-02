import styled from 'styled-components';

import { Colors } from '../styles/Colors';

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  display: block;
  width: 90%;
  max-width: 450px;
  border-radius: 8px;
  margin: 1rem auto;
  font-size: 20px;
  padding: 8px;
  background-color: ${Colors.primary};
  color: #fff;
`;
