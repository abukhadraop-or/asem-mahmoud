import React, { useState, useCallback } from 'react'
import { Container } from 'components/Shared/shared-styles'

import MobileNavbar from 'components/MobileNavbar/MobileNavbar'
import DesktopNavbar from 'components/DesktopNavbar/DesktopNavbar'
import Header from './header-styles'

/**
 *  Navbar list.
 * @return {JSX.Element}
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <Header>
      <Container>
        <DesktopNavbar />
        <MobileNavbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </Container>
    </Header>
  )
}

