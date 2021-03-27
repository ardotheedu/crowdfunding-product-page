import styled, {css} from 'styled-components'

interface ProductProps {
  available: boolean;
}

interface IsOpen {
  open: boolean;
}

export const Container = styled.div`

`;
export const Header = styled.header`   
  background: url(/image-hero-mobile.jpg) no-repeat;
  height: 55vh;
  background-size: 100vw;

    @media (min-width: 1000px) {
      height: 55vh;
      padding: 32px 0;
      background: url(/image-hero-desktop.jpg) no-repeat;
      background-size: 100vw;
    }
`;
export const HeaderContent = styled.div`
 @media (min-width: 1000px) {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
 }
`;



export const Content = styled.main`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    transform: translateY(-8rem);
  @media (min-width: 1000px) {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    transform: translateY(-70px);
  }
`;

export const Introduction = styled.div`
    background: var(--white);
    text-align: center;
    height: 230px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    img {
      transform: translateY(-50%)
    }
  @media (min-width: 1000px) {
    background: var(--white);
    height: 230px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    img {
      transform: translateY(-50%)
    }
  }
`;
export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7px;

    h1 {
      font-size: 1.75rem;
    }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;

    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const Buttons = styled.div`
    width: 90%;
    height: 59px;
    display: flex;
  @media (min-width: 1000px) {
    justify-content: space-between;
    width: 600px;
    height: 50px;
    display: flex;
  }
`;

export const BackButton = styled.button`
      background-color: var(--moderate-cyan);
    color: white;
    width: 90%;
    border-style: none;
    border-radius: 40px;
  @media (min-width: 1000px) {
    background-color: var(--moderate-cyan);
    color: white;
    padding: 15px 35px;
    border-style: none;
    border-radius: 40px;
  }
`;

export const BookmarkButton = styled.button`
  visibility: hidden;
  &:before {
        visibility: visible;
        content: url(/icon-bookmark.svg);
        width: 20px;
        float: left;
  } 
  border-style: none;
  @media (min-width: 1000px) {
    visibility: visible;

      padding: 15px 35px;
      border-style: none;
      border-radius: 40px;
      color: var(--dark-gray);
      font-weight: 700;

      &:before {
        content: url(/icon-bookmark.svg);
        width: 20px;
        transform: translateX(-50px);
        float: left;
        margin-top: -17px;
      } 
  }
`;
export const Progress = styled.div`
  @media (min-width: 1000px) {
    background: var(--white);
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 8px;
  }
`;

export const ProgressInfo = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    padding-bottom: 35px;
    div:nth-child(2){
      border-right: 2px solid #e4e4e4;
      border-left: 2px solid #e4e4e4;
      height: 100%;
      padding: 0 60px;
      margin: 0 60px;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;


export const ProgressBar = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    
    & > div {
      flex: 1;
      height: 10px;
      border-radius: 4px;
      background:  #e4e4e4;
      position: relative;
    }

    &  > div > div {
      width: 80%;
      height: 10px;
      border-radius: 4px;
      background: #3db4ab;
    }
  }
`;

export const About = styled.div`
  @media (min-width: 1000px) {
    background: var(--white);
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 8px;

    > h3 {
      margin-bottom: 20px;
    }
  }
`;

export const Description = styled.div`
  @media (min-width: 1000px) {
    p {
      margin-bottom: 30px;
    }
  }
`;
export const Product = styled.div<ProductProps>`
  @media (min-width: 1000px) {
  
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
  }
`;
export const ProductHeader = styled.div`
  @media (min-width: 1000px) {

    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
    align-items: center;
    > h3 {
      color: #3fb3ab;
    }
  }
`;
export const ProductBottom = styled.div`
  @media (min-width: 1000px) {
  
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
        color: #c9c9c9;
      }
    }
  }
`;

export const Products = styled.div`

`;



