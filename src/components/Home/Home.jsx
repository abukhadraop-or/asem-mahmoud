import MovieList from 'components/MovieList/MovieList'
import { Container } from 'components/Shared/shared-styles'
import Header from 'components/Header/Header'
import React from 'react'
import Footer from 'components/Footer/Footer'
import { FetchProvider } from 'context/FetchProvider'


/**
 * Home page contains navbar and movie list.
 *
* @return {JSX.Element}
 */
export default function Home() {
  return (
    <FetchProvider>
      <Header />
      <Container>
        <MovieList />
      </Container>
      <Footer />
    </FetchProvider>
  )
}
