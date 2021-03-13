import styled from 'styled-components'

export const Container = styled.div``;
export const Header = styled.header`
    height: 55vh;
    padding: 32px 0;
    background: url(/image-hero-desktop.jpg) no-repeat;
    background-size: 100vw;
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    
    > li {
      float: left;
      margin-left: 20px;
    }
    li a {
      color: white;
      float: left;
      display: block;
      text-align: center;
      text-decoration: none;
    }
  }
`;

export const Content = styled.main`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateY(-70px);
`;

export const Introduction = styled.div`
    background: var(--white);
    height: 200px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    img {
      transform: translateY(-50%)
    }


`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 1.75rem;
  }
`;

export const Buttons = styled.div`
    justify-content: space-between;
    width: 600px;
    display: flex;

    button {
      padding: 20px 35px;
      border-style: none;
      border-radius: 40px;
    }
`;
export const Progress = styled.div`
    background: var(--white);
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 8px;
`;

export const About = styled.div`
    background: var(--white);
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 8px;
`;

