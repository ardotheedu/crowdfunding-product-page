import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
}
body {
    min-height: 100%;
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
    color: var(--black)
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
  p {
    color: #c9c9c9;
  }
  .ReactModal__Body--open {
    position: relative;
  }
  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 720px;
        margin: 13% 0 0 0;
        height: 70%;
        background: var(--white);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;

    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        filter: brightness(0.8);
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
