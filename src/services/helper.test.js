import { getPercentage, formateDate } from './helper'


describe('helper', () => {
  describe('#getPercentage', () => {
    it('gets correct percentage', () => {
      expect(getPercentage(9.5)).toBe(95)
      expect(getPercentage(10)).toBe(100)
      expect(getPercentage(5.4)).toBe(54)
    })
  })

  describe('#formateDate', () => {
    it('gets correct formatted date', () => {
      expect(formateDate('1997-03-03')).toEqual('Mar 3, 1997')
    })
  })
})
