import { it, expect, vi } from 'vitest'
import { today } from '../time'

it.only('gets current date', () => {
  const dateA = new Date('1990-01-01')

  vi.setSystemTime(dateA)

  expect(today()).toEqual(dateA)

  const dateB = new Date('1991-01-01')

  vi.setSystemTime(dateB)

  expect(today()).toEqual(dateB)
  const dateC = new Date('1992-01-01')

  vi.setSystemTime(dateC)

  expect(today()).toEqual(dateC)

  vi.useRealTimers()
})

it.todo('gets tomorrow date')
it.todo('gets end of hour')
it.todo('checks if passed date is today')
it.todo('converts milliseconds to seconds')
