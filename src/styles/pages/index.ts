import styled from 'styled-components';

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
