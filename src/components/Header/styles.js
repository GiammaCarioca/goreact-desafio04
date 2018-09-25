import styled from 'styled-components';

export const Container = styled.header`
  max-width: 980px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  color: #ff9696;
  font-size: 40px;
  font-weight: bold;
`;

export const Cart = styled.div`
  color: #999;
  font-size: 16px;
  display: flex;

  svg {
    fill: #999;
    margin-right: 5px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = styled.nav`
  width: 980px;
  height: 54px;
  background: #ff9696;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px;
  display: flex;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      list-style: none;
      padding: 10px;

      &:first-child {
        color: #fff;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`;
