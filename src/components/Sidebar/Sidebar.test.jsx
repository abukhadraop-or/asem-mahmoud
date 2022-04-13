/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { shallow } from 'enzyme'
import { APP, NAVBAR_SUB_ITEMS } from 'components/Shared/constants'
import Sidebar from './Sidebar'
import '@testing-library/jest-dom'
import { PrimaryItem, PrimaryItems, SecondaryItems, SidebarWrapper } from './sidebar-styles'


describe('<Sidebar />', () => {
  const show = true
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Sidebar show={show} />)
  })

  it('renders correctly', () => {
    expect( wrapper).toMatchSnapshot();
  });

  it('should SidebarWrapper and PrimaryItems have correct props', () => {
    const sidebarWrapper = wrapper.find(SidebarWrapper)
    const primaryItems = wrapper.find(PrimaryItems)

    expect(sidebarWrapper.prop('show')).toBeTruthy()
    expect(primaryItems.prop('show')).toBeTruthy()
  })


  it('should render correct primary items', () => {
    const primaryItem = wrapper.find(PrimaryItem)

    expect(primaryItem).toHaveLength(APP.SIDEBAR_ITEMS.slice(3).length - 1)
  })


  it('should expand secondary items when click on primary', () => {
    const primaryItem = wrapper.find(PrimaryItem).first()
    const itemName = primaryItem.text()

    primaryItem.simulate('click')
    const secondaryItems = wrapper.find(SecondaryItems)

    expect(itemName).toEqual('Movies')
    expect(secondaryItems.children()).toHaveLength(NAVBAR_SUB_ITEMS[itemName].length)
  })
})
