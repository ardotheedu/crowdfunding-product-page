import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-gray: hsl(0, 0%, 48%);
    --black: hsl(0, 0%, 0%);
    --moderate-cyan: hsl(176, 50%, 47%);
    --dark-cyan: hsl(176, 72%, 28%);
    --background: #f2f3f5;
    --text: #666666;
    --white: #fff;
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
    background: var(--background);
    color: var(--white)
  }
  
  
  body, input, textarea, button {
    font: 400 1rem "Commissioner", sans-serif;
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