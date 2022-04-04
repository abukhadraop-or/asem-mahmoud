
import styled, { createGlobalStyle } from 'styled-components';

import SourceSansPro from 'assets/fonts/SourceSansPro-Regular.ttf';
import SourceSansProBold from 'assets/fonts/SourceSansPro-Bold.ttf';
import SourceSansProLight from 'assets/fonts/SourceSansPro-Light.ttf';
import SourceConsensus from 'assets/fonts/Consensus-Bold.otf';

export const VIEW_PORT = {
  mobileView: '62.5rem',
}

export const CSSReset = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 200;
    src: url(${SourceSansPro}) format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro Light';
    font-style: normal;
    font-weight: 200;
    src: url(${SourceSansProLight}) format('truetype');
  }

  @font-face {
    font-family: 'Consensus';
    font-style: normal;
    font-weight: 400;
    src: url(${SourceConsensus}) format('opentype');
  }

  @font-face {
    font-family: 'Source Sans Pro Bold';
    font-style: normal;
    src: url(${SourceSansProBold}) format('opentype');
  }

  :root {
    --tmdb-dark-blue: #152538;
    --tmdb-light-blue: #032541;
    --white-color: #ffffff;
    --black-color: #000;
    --primary-font: 'Source Sans Pro', Arial, sans-serif;
    --light-gray: #ffffff99;
    --dark-gray: #D3D3D3;
    --light-black: #00000026;
    --light-shade: #e3e3e3;
    --darkness-gray: #00000099;
    --dark-green: #081c22;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: var(--primary-font);
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 1rem);
  padding: 0 0.5rem;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    max-width: 83.5rem;
    padding: 0 2rem;
  }
`;

export const Items = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
