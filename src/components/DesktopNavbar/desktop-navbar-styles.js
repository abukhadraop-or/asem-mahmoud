import styled from 'styled-components'
import { VIEW_PORT } from 'components/Shared/shared-styles'

export const NavIcon = styled.img`
  height: 1.5rem;
  margin: 0 0.5rem;
  width: 1.5rem;
`;

export const NavbarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const SubNavbar = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const DesktopNavbarWrapper = styled(NavbarWrapper)`
  display: none;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    display: flex;
  }
`;

export const DesktopLogo = styled.img`
  height: auto;
  width: 10rem;
`;

export const LanguageItem = styled.div`
  border-radius: 0.2rem;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.2rem;
  text-transform: uppercase;

  &:hover {
    background-color: var(--white-color);
    color: var(--tmdb-dark-blue);
  }
`;

export const RightItem = styled.div`
  color: var(--white-color);
  cursor: pointer;
  font-weight: 600;
  padding: 0 0.5rem;
`;

export const Items = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
  padding: 0.5rem 0;
`;

export const DropDownList = styled.ul`
  background-color: var(--white-color);
  border-radius: 0.25rem;
  border: solid 1px #00000026;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  display: none;
  left: 0;
  list-style-type: none;
  position: absolute;
  top: 2.5rem;
  width: 10.5rem;
  z-index: 1;
`;

export const DropDownItem = styled.li`
  background-color: var(--white-color);
  color: var(--black-color);
  font-weight: 200;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--dark-gray);
  }
`;

export const Item = styled.li`
  color: var(--white-color);
  cursor: pointer;
  font-weight: 600;
  padding: 1rem 0.5rem;
  position: relative;

  &:hover > ${DropDownList} {
    display: block;
  }
`;
