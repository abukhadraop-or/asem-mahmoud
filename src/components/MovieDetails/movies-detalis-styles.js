import styled from 'styled-components';
import { VIEW_PORT } from 'components/Shared/shared-styles'

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  padding: 1.625rem 0.625rem;
  position: relative;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    flex-grow: 0 ;
  }
`;

export const MovieName = styled.div`
  color: var(--black-color);
  font-family: 'Source Sans Pro Bold';
  font-size: 1rem;
`;

export const MovieDate = styled.div`
  color: var(--darkness-gray);
`;

export const MovieOverview = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    display: none;
  }
`;

export const PercentVote = styled.div`
  display: none;

  @media(min-width: ${VIEW_PORT.mobileView}) {
    background-color: var(--dark-green);
    border-radius: 50%;
    border: 0.0625px solid #cdcbd0;
    display: block;
    height: 2.375rem;
    padding: 0.125rem;
    position: absolute;
    top: -1.1875rem;
    width: 2.375rem;
  }
`;
export const PercentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PercentValue = styled.div`
  color: var(--white-color);
  display: block;
  font-family: 'Consensus';
  font-size: 0.6rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleSvg = styled.svg`
  stroke: green;
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
  position: relative;
`

export const CircleProgress = styled.circle`
  stroke: #01D277;
  stroke-width: 6;
  stroke-dasharray: 100;
  fill: none;
`
