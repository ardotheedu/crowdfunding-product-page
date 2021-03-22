import styled, {css} from 'styled-components'

interface ProductProps {
    available: boolean;
    optionSelected: boolean;
}

 export const Overlay = styled.div`
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

`

export const ContainerModal = styled.div`
    transform: translateY(30%);
    background: var(--white);
    width: 100%;
    max-width: 700px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;


    > p {
      margin: 20px 0;
    }

`;

export const ModalProduct = styled.div<ProductProps>`
  > p {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    align-items: baseline;
    padding: 15px;
    div:nth-child(1) {
      margin-right: 20px;
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
      `
  };

  border: 1px solid #dddddd;
  ${props =>
      props.optionSelected &&
      css`
        border: 3px solid var(--moderate-cyan);
      `
  };
  border-radius: 10px;
  margin-bottom: 20px;
`
export const ModalProductHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
  align-items: center;
  > div {
    display: flex;
    align-items: center;

    > input {
      margin-right: 10px;
    }
    > h3 {
      margin-right: 10px;
    }
  }
`
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
  button:nth-child(1){
    display: flex;
    border-style: solid;
    background-color: var(--white);
    border-color: #dddddd;
    strong {
      font-weight: 700;
      margin-left: 7px;
    }
  }
  button:nth-child(2){
    color: white;
    background-color: var(--moderate-cyan);
    border-style: none;
  }
`

export const ModalPledge = styled.h3`
  color: #3fb3ab;
`;

export const CloseButton = styled.button`
      position: absolute;
      background: transparent;
      right: 0.5rem;
      top: 0.5rem;
      border: 0; 
      font-size: 0px
`;