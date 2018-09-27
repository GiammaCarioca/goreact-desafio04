import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  margin: 20px 20px 0 0;
  padding: 30px 49px;
  border: 1px solid #eee;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    margin-bottom: 15px;
    width: 124px;
    height: 180px;
  }

  strong {
    color: #000;
    font-size: 18px;
  }

  p {
    color: #c0c0c0;
    font-size: 14px;
  }

  span {
    margin-top: 10px;
    color: #37bea9;
    font-size: 24px;
    font-weight: bold;
  }
`;
