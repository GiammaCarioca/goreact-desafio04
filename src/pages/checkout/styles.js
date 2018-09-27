import styled from 'styled-components';

export const ShoppingList = styled.table`
  width: 980px;
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 3px;

  thead th {
    padding: 20px 0 20px 0;
    color: #999;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
  }

  tbody td {
    border-top: 1px solid #eee;

    img {
      width: 40px;
      height: 60px;
      margin: 15px 30px;
    }

    strong {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      color: #c0c0c0;
      font-size: 14px;
    }

    &:nth-child(2) {
      width: 480px;
    }

    &:nth-child(3) {
      margin-right: 30px;
    }

    &:nth-child(3),
    :nth-child(5) {
      color: #37bea9;
      font-size: 24px;
      font-weight: bold;
    }

    span {
      margin-right: 15px;
    }

    div {
      border: 1px solid #eee;
      border-radius: 3px;
      margin-right: 30px;
      padding: 5px 12px;
      font-size: 14px;
      color: #999;
    }

    button {
      margin: 30px;
      border: none;
      font-size: 16px;
      color: #999;
    }
  }
`;

export const Soma = styled.div`
  position: absolute;
  left: 770px;
  top: 650px;
  display: flex;
  align-items: center;

  strong {
    font-size: 18px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
  }

  span {
    margin-left: 15px;
    color: #37bea9;
    font-size: 30px;
    font-weight: bold;
  }
`;
