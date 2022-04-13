import styled from 'styled-components';
import { Button, VIEW_PORT } from 'components/Shared/shared-styles'

export const PopularTitle = styled.h2`
  margin: 5.5rem 0 0;
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem 1rem;
  padding: 1.25rem 0;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const MoviesGrid = styled.div`
  flex-grow: 1;
`

export const MovieItems = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, auto));
  }
`;

export const LoadMore = styled(Button)`
  background-color: #01B4E4;
  border-radius: 0.4rem;
  color: var(--white-color);
  font-family: 'Source Sans Pro Bold';
  font-size: 1.5rem;
  margin-top: 1.875rem;
  padding: 1rem 0;
  width: 100%;
`
