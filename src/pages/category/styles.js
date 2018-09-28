import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Product = styled(Link)`
  margin-top: 20px;
  padding: 30px 30px;
  border: 1px solid #eee;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    margin-bottom: 15px;
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
