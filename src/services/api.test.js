import { fetchMovies, API_URL, API_KEY  } from './api'
import getHttpRequest from './http-functions'

jest.mock('./http-functions', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('api', () => {
  describe('#fetchMovies', () => {
    it('should called with default parameters', async () => {
      await fetchMovies()

      expect(getHttpRequest).toHaveBeenCalledWith(`${API_URL}movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`)
    })

    it('should called with passed parameters', async () => {
      const sortBy = 'popularity.asc'
      const page = 2
      await fetchMovies(sortBy, page)

      expect(getHttpRequest).toHaveBeenCalledWith(`${API_URL}movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=${sortBy}`)
    })
  })
})
