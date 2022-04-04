import React from 'react'
import PropTypes  from 'prop-types'
import { getPercentage } from 'services/helper'
import {
  MovieDate,
  MovieDetailsWrapper,
  MovieName,
  PercentVote,
  PercentValue,
  PercentWrapper,
  MovieOverview,
  CircleSvg,
  CircleProgress,
} from './movies-detalis-styles'


/**
 * Movie information.
 * @param {Object} props
 * @param {string} props.date Movie's release date.
 * @param {string} props.name Movie's name.
 * @param {number} props.vote Movie's vote.
 * @param {number} props.overview Movie's overview.
* @return {JSX.Element}
 */
export default function MovieDetails({ date, name, overview, vote }) {
  return (
    <MovieDetailsWrapper>
      <PercentVote>
        <PercentWrapper>
          <PercentValue>{`${getPercentage(vote)}%`}</PercentValue>
          <CircleSvg viewBox="0 0 120 120">
            <CircleProgress cx="60" cy="60" r="54" pathLength='100' strokeDashoffset={100 - getPercentage(vote)} />
          </CircleSvg>
        </PercentWrapper>
      </PercentVote>
      <MovieName>{name}</MovieName>
      <MovieDate>{date}</MovieDate>
      <MovieOverview>{overview}</MovieOverview>
    </MovieDetailsWrapper>
  )
}

MovieDetails.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
}
