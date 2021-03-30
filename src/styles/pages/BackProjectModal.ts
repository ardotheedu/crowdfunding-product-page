import styled, { css } from 'styled-components';

interface ProductProps {
  available: boolean;
  optionSelected: boolean;
}

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 1857px;
`;

export const ContainerModal = styled.div`
  background: var(--white);
  transform: translateY(-27%);
  width: 100%;
  height: 53%;
  max-width: 700px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;

  > p {
    margin: 20px 0 30px 0;
  }

  > div {
    height: 100%;
  }
`;

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
  margin-bottom: 30px;
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
  justify-content: space-between;

  div {
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
    border-style: none;
    padding: 10px 0;
  }

  button {
    padding: 12px 20px;
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
