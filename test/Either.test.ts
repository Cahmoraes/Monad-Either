import { describe, it, expect } from '@jest/globals'
import { Either } from '../src'

describe.only('Either test suite', () => {
  describe('Right Test Suite', () => {
    it('should return a Right instance', () => {
      const result = Either.right(1)

      expect(result.isRight()).toBeTruthy()
      expect(result.isLeft()).toBeFalsy()
      expect(result.value).toBe(1)
    })
  })

  describe('Left Test Suite', () => {
    it('should return a left instance', () => {
      const result = Either.left(1)

      expect(result.isRight()).toBeFalsy()
      expect(result.isLeft()).toBeTruthy()
      expect(result.value).toBe(1)
    })
  })
})
