import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#e4a96a' : '#442c23')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#442c23' : '#f4e8de')};
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? '#f4e8de ' : '#bf8d58')};
  }
`;