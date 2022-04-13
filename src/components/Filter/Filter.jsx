import { APP } from 'components/Shared/constants'
import React, { useContext, useState } from 'react'
import RightArrow from 'assets/images/glyphicons-basic-chevron-right.svg'
import { Button } from 'components/Shared/shared-styles'
import { FetchContext } from 'context/FetchProvider'
import {
  FilterName,
  FilterContent,
  FilterArrow,
  FilterBox,
  FilterSortName,
  FilterSortContent,
  DropDownMenu,
  DropDownItems,
  DropDownSelectedItem,
  DropDownItem,
} from './filter-styles'

export default function Filter() {
  const [toggleFilter, setToggleFilter] = useState(true)
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [selectedItem, setSelectedItem] = useState(APP.SORT_FILTERS[0].name)
  const ctx = useContext(FetchContext)

  /**
   * Handle toggle filter component.
  */
  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter)
    setToggleDropDown(false)
  }

  /**
   * Handle toggle drop down component.
   *
   * @param {string} newSelectedItem Selected item.
   * @param {string} sortBy SortBy value.
  */
    const handleToggleDropDown = (newSelectedItem, sortBy) =>  {
      setToggleDropDown(false)
      setSelectedItem(newSelectedItem)
      ctx?.setValues({ sortBy })
    }

  return (
    <div>
      <FilterBox>
        <FilterContent>
          <FilterName>{APP.SORT_FILTER}</FilterName>
          <Button onClick={handleToggleFilter}><FilterArrow rotate={toggleFilter} src={RightArrow}/></Button>
        </FilterContent>
        { toggleFilter
            && (<FilterSortContent>
              <FilterSortName>{APP.SORT_RESULT}</FilterSortName>
                <DropDownMenu>
                  <DropDownSelectedItem onClick={() => setToggleDropDown(!toggleDropDown)}>{selectedItem}</DropDownSelectedItem>
                    { toggleDropDown && <DropDownItems>
                      {APP.SORT_FILTERS.map(({ name, value }) =>
                        (name !== selectedItem && <DropDownItem key={value} onClick={() => handleToggleDropDown(name, value)}>{name}</DropDownItem>
                        ))}
                      </DropDownItems>
                    }
                </DropDownMenu>
            </FilterSortContent>)
            }
      </FilterBox>
    </div>
  )
}
