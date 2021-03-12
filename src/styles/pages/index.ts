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