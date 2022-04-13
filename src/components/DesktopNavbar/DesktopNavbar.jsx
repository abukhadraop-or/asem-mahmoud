import React from 'react'
import SearchIcon from 'assets/images/glyphicons-basic-search-blue.svg'
import Logo from 'assets/images/blue_short-tmdb.svg'
import PlusIcon from 'assets/images/glyphicons-basic-plus-white.svg'
import { APP } from 'components/Shared/constants'
import {
  DesktopNavbarWrapper,
  SubNavbar,
  Items,
  RightItem,
  Item,
  DropDownItem,
  DesktopLogo,
  LanguageItem,
  NavIcon,
  DropDownList,
} from './desktop-navbar-styles'

/**
 * Desktop navbar.
 *
 * @return {JSX.Element}
 */
export default function DesktopNavbar() {
  return (
    <DesktopNavbarWrapper>
      <SubNavbar>
        <DesktopLogo src={Logo} />
        <Items>
          {APP.NAVBAR_ITEMS.map((item) => (
            <Item key={item}>
              {item}
              <DropDownList>
                {APP.NAVBAR_SUB_ITEMS[`${item}`].map((subItem) => (
                  <DropDownItem key={subItem} >{subItem}</DropDownItem>
                ))}
              </DropDownList>
            </Item>
          ))}
        </Items>
      </SubNavbar>
      <SubNavbar>
        <NavIcon src={PlusIcon} />
        <LanguageItem>{APP.LANGUAGE}</LanguageItem>
        <RightItem>{APP.LOGIN}</RightItem>
        <RightItem>{APP.JOIN}</RightItem>
        <NavIcon src={SearchIcon} />
      </SubNavbar>
  </DesktopNavbarWrapper>
  )
}
