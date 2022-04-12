import getHttpRequest from './http-functions'

const url = 'http://localhost:3000/'

describe('http-functions', () => {
  describe('#getHttpRequest', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(async () =>  ({ json: async () => ({ data: 'test' })}))
    })

    it('calls with passed params and default headers', async () => {
      await getHttpRequest(url)

      expect(fetch).toHaveBeenCalledWith(url, { headers: {} })
    })


    it('calls with passed params', async () => {
      const headers = { Accept: 'application/json' }
      await getHttpRequest(url, headers)

      expect(fetch).toHaveBeenCalledWith(url, { headers })
    })
  })
})
