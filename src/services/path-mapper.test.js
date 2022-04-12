import getMoviePoster, { IMAGE_BASE_URL, POSTER_SIZE} from './path-mapper'

const path = 'http://localhost:3000/'

describe('path-mapper', () => {
  describe('#getMoviePoster', () => {
    it('should return full image url', async () => {
      const result = getMoviePoster(path)

      expect(result).toEqual(`${IMAGE_BASE_URL}${POSTER_SIZE}${path}`)
    })
  })
})