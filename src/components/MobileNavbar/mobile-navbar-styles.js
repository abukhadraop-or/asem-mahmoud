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

export const MobileNavbarWrapper = styled(NavbarWrapper)`
  padding: 0.5rem 0;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    display: none;
  }
`;

export const MobileLogo = styled.img`
  height: auto;
  width: 3.5rem;
`;
