import styled from 'styled-components';
import { VIEW_PORT } from 'components/Shared/shared-styles'

export const MovieCardItem = styled.div`
  background-color: var(--white-color);
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  display: flex;
  position: relative;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    flex-direction: column;
  }
`;

export const MovieCardImage = styled.img`
  border-bottom-left-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
  width: 5.875rem;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    flex-direction: column;
    width: 100%;
  }
`;

export const MoreMenu = styled.img`
  height: 1.625rem;
  opacity: 0.7;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1.625rem;
`;
