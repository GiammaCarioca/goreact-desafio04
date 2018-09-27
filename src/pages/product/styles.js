import styled from 'styled-components';

export const Container = styled.div`
  width: 980px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.div`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 50px 100px 50px 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

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
    margin-top: 50px;
    margin-bottom: 12px;
    color: #37bea9;
    font-size: 36px;
    font-weight: bold;
  }

  button {
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    padding: 15px 135px;
    background: #37bea9;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
