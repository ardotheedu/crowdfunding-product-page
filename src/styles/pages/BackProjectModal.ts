import styled, {css} from 'styled-components'

interface ProductProps {
    available: boolean;
}

 export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerModal = styled.div`
    background: var(--white);
    width: 100%;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;
    button {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        background: transparent;
        border: 0; 
        font-size: 0px
    }

`;

export const ModalProduct = styled.div<ProductProps>`
  > p {
    margin-bottom: 20px;
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

  padding: 20px;
  border: 1px solid #dddddd;
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
    > h3 {
        color: #3fb3ab;
    }
  }
`
export const ModalProductBottom = styled.div`
  display: flex;
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
`

