import {
  formatSecondsWithSign,
  formatSeconds,
  normalizeSelectValue,
  getProgressColorClass,
  id
} from '../functions'
import { it, expect, vi } from 'vitest'
import { ProgressColorClass } from '../types'
import { HUNDRED_PERCENT, LOW_PERCENT, MEDIUM_PERCENT } from '../constants'

it('format seconds with sign', () => {
  expect(formatSecondsWithSign(0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(60)).toBe('+00:01:00')
  expect(formatSecondsWithSign(3600)).toBe('+01:00:00')
  expect(formatSecondsWithSign(60 * 60 * 23)).toBe('+23:00:00')

  expect(formatSecondsWithSign(-0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(-60)).toBe('-00:01:00')
  expect(formatSecondsWithSign(-3600)).toBe('-01:00:00')
  expect(formatSecondsWithSign(-60 * 60 * 23)).toBe('-23:00:00')
})

it('format seconds', () => {
  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(3600)).toBe('01:00:00')
  expect(formatSeconds(60 * 60 * 23)).toBe('23:00:00')
})

it('normalizes select value', () => {
  expect(normalizeSelectValue(null)).toBe(null)
  expect(normalizeSelectValue('1')).toBe(1)
  expect(normalizeSelectValue('random-string')).toBe('random-string')
})
it('gets progress color class', () => {
  expect(getProgressColorClass(0)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(LOW_PERCENT - 1)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(MEDIUM_PERCENT - 1)).toBe(ProgressColorClass.YELLOW)
  expect(getProgressColorClass(HUNDRED_PERCENT - 1)).toBe(ProgressColorClass.BLUE)
  expect(getProgressColorClass(HUNDRED_PERCENT)).toBe(ProgressColorClass.GREEN)
})
it(' generates id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)

  expect(id()).toBe('1s')
})
