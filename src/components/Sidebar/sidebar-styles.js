import styled from 'styled-components';


export const SidebarWrapper = styled.div`
  background-color: var(--tmdb-light-blue);
  height: 100%;
  left: 0;
  position: fixed;
  top: 3.5rem;
  transition: width 0.5s;
  width: ${({ show }) => (show ? 90 : 0)}%;
  z-index: 1;
`;

export const PrimaryItems = styled.ul`
  display: ${({ show }) => show ? 'block':  'none'};
  list-style-type: none;
  padding: 1rem;
`;

export const SecondaryItems =styled.ul`
  list-style-type: none;
  padding: 0.5rem 0;
`;

export const PrimaryItem = styled.li`
  color: var(--white-color);
  cursor: pointer;
  font-size: 1.25rem;
  padding-bottom: 0.652rem;
`;

export const SecondaryItem = styled.li`
  color: var(--light-gray);
  font-size: 1rem;
  padding-bottom: 0.652rem;
`;
