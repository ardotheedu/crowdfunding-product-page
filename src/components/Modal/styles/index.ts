import styled, { css } from 'styled-components';

interface ProductProps {
  available: boolean;
  optionSelected: boolean;
}

export const ModalProduct = styled.div<ProductProps>`
  > p {
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    padding: 20px;
    > div {
      > p {
        text-align: justify;
        margin: 20px 0;
      }
    }
    > div:nth-child(1) {
      margin-right: 20px;
      > input[type='radio'] {
        border: 0px;
        width: 20px;
        height: 20px;
      }
    }
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #dddddd;
    padding: 0;
  }
  ${props =>
    !props.available &&
    css`
      opacity: 0.3;
      button {
        background-color: grey;
      }
    `};
  border: 1px solid #dddddd;
  ${props =>
    props.optionSelected &&
    css`
      border: 3px solid var(--moderate-cyan);
    `};
  border-radius: 10px;
  margin-bottom: 2rem;
`;
export const ModalProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    > input {
      margin-right: 10px;
    }
    > h3 {
      font-size: 1rem;
      margin-right: 10px;
    }
  }
`;
export const ModalProductBottom = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 50%;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    > h3 {
      font-size: 2rem;
    }
    > p {
      margin-left: 8px;
    }
  }
  input {
    width: 100%;
    font-size: 0.9rem;
    border-style: none;
    padding: 10px 0;
  }
  button {
    padding: 6px 10px;
    border-radius: 40px;
  }
  button:nth-child(1) {
    display: flex;
    border-style: solid;
    background-color: var(--white);
    border-color: #dddddd;
    strong {
      font-weight: 700;
      margin-left: 7px;
    }
  }
  button:nth-child(2) {
    color: white;
    margin-left: 10px;
    background-color: var(--moderate-cyan);
    border-style: none;
  }
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    div {
      width: 100%;
    }
    input {
      font-size: 1rem;
    }
    button {
      padding: 12px 20px;
      border-radius: 40px;
    }
  }
`;

export const ModalPledge = styled.h3`
  color: #3fb3ab;
`;

export const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  right: 0.5rem;
  top: 0.5rem;
  border: 0;
  font-size: 0px;
`;
