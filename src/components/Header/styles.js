import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
`;

/*
 * Header
 */

export const Container = styled.header`
  height: 54px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #ff9696;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
`;

export const Cart = styled(Link)`
  color: #999;
  font-size: 16px;
  display: flex;
  text-decoration: none;

  svg {
    fill: #999;
    margin-right: 5px;
  }
`;

/*
 * Navigation
 */

export const Nav = styled.nav`
  width: 980px;
  height: 54px;
  border-radius: 3px;
  background: #ff9696;
  display: flex;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      list-style: none;
    }
  }
`;

export const Category = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 20px;

  &:hover {
    color: #fff;
  }
`;
