import { expect, it, vi } from 'vitest'
import { formatSeconds, formatSecondsWithSign, normalizeSelectValue, id } from '../src/functions'

it('formats seconds', () => {
  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(180)).toBe('00:03:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(60 * 60)).toBe('01:00:00')
  expect(formatSeconds(24 * 60 * 60)).toBe('00:00:00')
})

it('formats seconds with sign', () => {
  expect(formatSecondsWithSign(0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(60)).toBe('+00:01:00')
  expect(formatSecondsWithSign(180)).toBe('+00:03:00')
  expect(formatSecondsWithSign(30 * 60)).toBe('+00:30:00')
  expect(formatSecondsWithSign(30 * 60)).toBe('+00:30:00')
  expect(formatSecondsWithSign(60 * 60)).toBe('+01:00:00')
  expect(formatSecondsWithSign(24 * 60 * 60)).toBe('+00:00:00')

  expect(formatSecondsWithSign(-0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(-60)).toBe('-00:01:00')
  expect(formatSecondsWithSign(-180)).toBe('-00:03:00')
  expect(formatSecondsWithSign(-30 * 60)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-30 * 60)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-60 * 60)).toBe('-01:00:00')
  expect(formatSecondsWithSign(-24 * 60 * 60)).toBe('-00:00:00')
})

it('normalizes select value', () => {
  expect(normalizeSelectValue('random-string')).toBe('random-string')
  expect(normalizeSelectValue(null)).toBe(null)
  expect(normalizeSelectValue('1')).toBe(1)
})

it('generates random id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)

  expect(id()).toBe('1s')
  // expect(id()).toBe('1s')
  // expect(id()).toBe('1s')
})

// test('Squared', () => {
//   expect(squared(2)).toBe(4)
//   expect(squared(12)).toBe(144)
// })

// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   }

//   const output = JSON.stringify(input)

//   expect(output).eq('{"foo":"hello","bar":"world"}')
//   assert.deepEqual(JSON.parse(output), input, 'matches original')
// })
