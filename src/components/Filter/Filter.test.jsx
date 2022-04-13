import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'components/Shared/shared-styles'
import { APP } from 'components/Shared/constants'
import Filter from './Filter'
import '@testing-library/jest-dom'
import { DropDownItem, DropDownItems, DropDownSelectedItem, FilterArrow, FilterName, FilterSortContent } from './filter-styles'


describe('<Filter />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Filter />)
  })

  it('renders correctly', () => {
    expect( wrapper).toMatchSnapshot();
  });

  it('should filter name rendered and contains correct content', () => {
    const filterName = wrapper.find(FilterName)

    expect(filterName).toHaveLength(1);
    expect(filterName.text()).toContain(APP.SORT_FILTER);
  })

  it('should filter toggle button rendered', () => {
    const toggleFilter = wrapper.find(Button);

    expect(toggleFilter).toHaveLength(1);
  })

  it('should toggle filter state true', () => {
    const toggleFilterContent = wrapper.find(FilterSortContent)
    const filterArrow = wrapper.find(FilterArrow)

    expect(filterArrow.prop('rotate')).toBeTruthy()
    expect(toggleFilterContent).toHaveLength(1)
  })

  it('should not render filter content when click on toggle filter button', () => {
    const toggleFilterButton = wrapper.find(Button)

    toggleFilterButton.simulate('click')

    expect(wrapper.find(FilterSortContent)).toHaveLength(0)
    expect(wrapper.find(FilterArrow).prop('rotate')).toBeFalsy()
  })

  it('should render dropdown items when select item', () => {
    const selectedItem = wrapper.find(DropDownSelectedItem)

    selectedItem.simulate('click')

    expect(wrapper.find(DropDownItems)).toHaveLength(1)
    expect(wrapper.find(DropDownItem)).toHaveLength(APP.SORT_FILTERS.length - 1)
  })

  it('should close dropdown items menu after select item', () => {
    const selectedItem = wrapper.find(DropDownSelectedItem)

    selectedItem.simulate('click')
    wrapper.find(DropDownItem).last().simulate('click')

    const lastItem = APP.SORT_FILTERS[APP.SORT_FILTERS.length - 1].name

    expect(wrapper.find(DropDownSelectedItem).text()).toBe(lastItem)
  })
})
