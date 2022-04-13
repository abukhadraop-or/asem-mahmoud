import { Button, VIEW_PORT } from 'components/Shared/shared-styles';
import styled from 'styled-components';


export const FilterWrapper = styled.div``;

export const FilterBox = styled.div`
  border-radius: 0.5rem;
  border: 0.0625px solid var(--light-shade);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  min-width: 100%;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    min-width: 16.25rem;
  }
`;

export const FilterContent =  styled.div`
  align-items: center;
  border: 0.0625px solid var(--light-shade);
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 1rem;
`;

export const FilterName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const FilterSortContent =  styled.div`
  padding: 0.875rem 1rem;
`;

export const FilterSortName = styled.div`
  font-family: 'Source Sans Pro Light';
  margin-bottom: 0.7rem;
`;

export const FilterArrow = styled.img`
  height: 1rem;
  transform: rotate(${({ rotate }) => rotate ? 90 : 0}deg);
  width: 1rem;
`;

export const DropDownMenu = styled.div`
  position: relative;
  text-align: left;
`;

export const DropDownItem = styled(Button)`
  display: block;
  padding: 0.375rem 0.375rem 0.375rem 0.75rem;
  text-align: inherit;
  width: 100%;

  &:hover {
    background-color: var(--dark-gray);
  }
`;

export const DropDownItems = styled(FilterBox)`
  background-color: var(--white-color);
  left: 0;
  min-width: 100%;
  position: absolute;
  top: 2rem;
  z-index: 10;
`;

export const DropDownSelectedItem = styled(Button)`
  background-color: #e4e7eb;
  border-radius: 0.3rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
  position: relative;
  text-align: left;
  width: 100%;

  &::before {
    position: absolute;
    content: "";
    right: 0.75rem;
    top: 40%;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: var(--black-color) transparent transparent transparent;
  }
`;
