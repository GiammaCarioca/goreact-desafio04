import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ProductDetails = styled.div`
  width: 980px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.div`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 50px 100px;
`;

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  strong {
    text-decoration: none;
    color: #000;
    font-size: 36px;
    font-weight: bold;
  }

  p {
    color: #c0c0c0;
    font-size: 20px;
  }

  span {
    margin: 50px 0 24px 0;
    color: #37bea9;
    font-size: 36px;
    font-weight: bold;
  }

  button {
    border: none;
    border-radius: 3px;
    padding: 15px 0;
    background: #37bea9;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
