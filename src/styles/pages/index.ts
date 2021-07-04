import styled from 'styled-components';

interface BookmarkProps {
  textColor: string;
  icon: string;
}

export const Container = styled.div``;
export const Header = styled.header`
  background: url(/image-hero-mobile.jpg) no-repeat;
  height: 55vh;
  background-size: 100vw;

  @media (min-width: 769px) {
    height: 55vh;
    padding: 32px 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent),
      url(/image-hero-desktop.jpg) no-repeat;
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

export const Buttons = styled.div`
  width: 82%;
  height: 59px;
  display: flex;
  @media (min-width: 769px) {
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
  @media (min-width: 769px) {
    width: 30%;
    background-color: var(--moderate-cyan);
    color: white;
    border-style: none;
    border-radius: 40px;
  }
`;

export const BookmarkButton = styled.button<BookmarkProps>`
  visibility: hidden;
  margin-left: 3%;
  &:before {
    visibility: visible;
    content: ${props => `url(${props.icon})`};
    width: 20px;
    float: left;
  }
  border-style: none;
  @media (min-width: 769px) {
    visibility: visible;
    margin-left: 0%;

    padding: 15px 35px;
    border-style: none;
    border-radius: 40px;
    color: ${props => `var(${props.textColor})`};
    font-weight: 700;

    &:before {
      content: ${props => `url(${props.icon})`};
      width: 20px;
      transform: translateX(-50px);
      float: left;
      margin-top: -17px;
    }
  }
`;
