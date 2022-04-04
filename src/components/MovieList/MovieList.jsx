import React, { useContext, useEffect, useState, useRef } from 'react'
import Filter from 'components/Filter/Filter'
import { APP } from 'components/Shared/constants'
import fetchMovies from 'services/api'
import MovieCard from 'components/MovieCard/MovieCard'
import { formateDate } from 'services/helper'
import { FetchContext } from 'context/FetchProvider'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import {
  MoviesWrapper,
  PopularTitle,
  MovieItems,
  MoviesGrid,
  LoadMore,
} from './movie-list-styles'

/**
 * Listing all movies cards.
 * @return {JSX.Element}
 */
export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const { values : { sortBy } } = useContext(FetchContext)
  const ref = useRef()
  const onScreen = useIntersectionObserver(ref)

  useEffect(() => {
    (async () => {
      const data = await fetchMovies(sortBy)
      setMovies(data.results)
    })()
  }, [sortBy])


  useEffect(() => {
    (async () => {
      const data = await fetchMovies(sortBy, page)
      setMovies(movies.concat(data.results))
    })()
  }, [page])


  useEffect(() => {
    if (onScreen && page > 1) {
      setPage((prePage) => prePage + 1)
    }
  }, [onScreen])


  /**
   * Load more movies
   * @return {void}
   */
  const loadMore = () => setPage((prePage) => prePage + 1)

  return (
    <>
      <PopularTitle>{APP.POPULAR_TITLE}</PopularTitle>
      <MoviesWrapper>
        <Filter />
        <MoviesGrid>
          <MovieItems>
            {movies.map((movie) => (
              <MovieCard
                key={`${movie.title}${movie.release_date}`}
                posterPath={movie.poster_path}
                name={movie.title}
                date={formateDate(movie.release_date)}
                overview={movie.overview} vote={movie.vote_average}/>
            ))}
          </MovieItems>
          <LoadMore ref={ref} onClick={loadMore} >{APP.LOAD_MORE}</LoadMore>
        </MoviesGrid>
      </MoviesWrapper>
    </>
  )
}
