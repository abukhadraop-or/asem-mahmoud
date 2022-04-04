import React from 'react'
import PropTypes  from 'prop-types'
import MobileLogoIcon from 'assets/images/blue_square.svg'
import SearchIcon from 'assets/images/glyphicons-basic-search-blue.svg'
import UserIcon from 'assets/images/glyphicons-basic-user.svg'
import HamburgerIcon from 'assets/images/glyphicons-basic-menu.svg'

import Sidebar from 'components/Sidebar/Sidebar'
import { Button } from 'components/Shared/shared-styles'
import {
  MobileNavbarWrapper,
  NavIcon,
  MobileLogo,
  SubNavbar
} from './mobile-navbar-styles'

/**
 * Mobile navbar.
 * @param {Object} props
 * @param {boolean} props.isOpen Flag for toggling sidebar.
 * @param {Function} props.toggleSidebar function to handle sidebar toggling.
* @return {JSX.Element}
 */
export default function MobileNavbar({ isOpen, toggleSidebar }) {
  return (
    <MobileNavbarWrapper>
      <Button onClick={toggleSidebar}><NavIcon src={HamburgerIcon} /></Button>
      <Sidebar show={isOpen} />
      <MobileLogo src={MobileLogoIcon} />
      <SubNavbar>
        <NavIcon src={UserIcon} />
        <NavIcon src={SearchIcon} />
      </SubNavbar>
  </MobileNavbarWrapper>
  )
}

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.instanceOf(Function).isRequired,
}
