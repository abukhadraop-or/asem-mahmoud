import React from 'react'
import PropTypes from 'prop-types'
import  getMoviePoster from 'services/pathMapper'
import MovieDetails from 'components/MovieDetails/MovieDetails'
import MoreIcon from 'assets/images/glyphicons-basic-circle-more-white.svg'
import NotFoundImage from 'assets/images/not-found.jpeg'
import { MoreMenu, MovieCardImage, MovieCardItem } from './movie-card-styles'

/**
 * Movie card.
 * @param {Object} props
 * @param {string} props.posterPath Movie's poster image.
 * @param {string} props.date Movie's release date.
 * @param {string} props.name Movie's name.
 * @param {number} props.vote Movie's vote.
 * @param {number} props.overview Movie's overview.
 * @return {JSX.Element}
 */
export default function MovieCard({ date, name, posterPath, vote, overview }) {
  return (
    <MovieCardItem>
      <MovieCardImage src={posterPath ? getMoviePoster(posterPath) : NotFoundImage} alt={name} />
      <MoreMenu src={MoreIcon} />
      <MovieDetails name={name} date={date} vote={vote} overview={overview} />
    </MovieCardItem>
  )
}

MovieCard.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  vote: PropTypes.number,
}

MovieCard.defaultProps = {
  posterPath: '',
  vote: 0,
}
