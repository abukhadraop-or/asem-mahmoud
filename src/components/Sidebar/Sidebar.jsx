import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { APP } from 'components/Shared/constants'
import {
  SidebarWrapper,
  PrimaryItems,
  PrimaryItem,
  SecondaryItems,
  SecondaryItem,
} from './sidebar-styles'


/**
 *  Sidebar list for mobile view.
 * @param {Object} props
 * @param {boolean} props.show Flag for display sidebar.
 * @return {JSX.Element}
 */
export default function Sidebar({ show }) {
  const [selected, setSelected] = useState('')

  /**
   * @param {string} item - The selected item .
   * @return {void}
   */
  const handleSelectedSubMenu = (item) => {
    setSelected(item === selected ? '' : item)
  }

  return (
    <SidebarWrapper show={show}>
      <PrimaryItems show={show}>
        {APP.SIDEBAR_ITEMS.slice(0, 3).map((item) => (
          <PrimaryItem key={item} onClick={() => handleSelectedSubMenu(item)} >
            {item}
            {selected === item && (
              <SecondaryItems>
                {APP.NAVBAR_SUB_ITEMS[`${item}`].map((subItem) => (
                  <SecondaryItem key={subItem}>{subItem}</SecondaryItem>
                ))}
              </SecondaryItems>
            )}
          </PrimaryItem>
        ))}
        {APP.SIDEBAR_ITEMS.slice(3).map((item) => (
          <SecondaryItem key={item}>{item}</SecondaryItem>
        ))}
      </PrimaryItems>
    </SidebarWrapper>
  )
}

Sidebar.propTypes = { show : PropTypes.bool.isRequired }

