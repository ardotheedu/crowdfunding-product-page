import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: hsl(0, 0%, 100%)
    --black: hsl(0, 0%, 0%)
    --dark-gray: hsl(0, 0%, 55%)
    --very-dark-gray: hsl(0, 0%, 41%)
  }
  
  @media(max-width: 1080px) {
    html {
        font-size: 93.75%
    }
  }
  
  @media(max-width: 720px) {
    html {
        font-size: 87.5%
    }
  }
  
  body {
    background: var(--dark-gray);
    color: var(--black)
  }
  
  
  body, input, textarea, button {
    font: 400 1rem "Alata", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;