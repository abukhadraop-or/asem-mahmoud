import styled from "styled-components";
import { Button, VIEW_PORT } from 'components/Shared/shared-styles'

export const FooterWrapper = styled.div`
  background-color: var(--tmdb-dark-blue);
  padding: 2.5rem 0;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    flex-direction: row;
    justify-content: center;
  }
`

export const FooterLogo = styled.img`
  display: none;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    display: block;
    padding-bottom: 0.5rem;
    width: 8.125rem;
  }
`

export const FooterTitle = styled(Button)`
  background-color: var(--white-color);
  border-radius: 0.3rem;
  color: #235ea7;
  font-family: 'Source Sans Pro Bold';
  font-size: 1.1875rem;
  padding: 1rem 0.5rem;
  text-transform: uppercase;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    color: #01B4E4;
  }
`
export const FooterPrimaryItem = styled.div`
  color: var(--white-color);
  font-family: 'Source Sans Pro Bold';
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const FooterItems = styled.ul`
  color: var(--white-color);
  list-style-type: none;
`;

export const FooterSecondaryItem = styled.li`
  font-size: 1.125rem;
  padding: 0.2rem 0;
`;
