import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  display: flex;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Product = styled.li`
  margin-top: 20px;
  margin-right: 20px;
  border: 1px solid #eee;
  border-radius: 3px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 49px;
  padding-right: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 15px;
    width: 124px;
    height: 180px;
  }

  strong {
    font-size: 18px;
  }

  p {
    color: #c0c0c0;
    font-size: 14px;
  }

  spam {
    margin-top: 10px;
    margin-bottom: 30px;
    color: #37bea9;
    font-size: 24px;
    font-weight: bold;
  }
`;
