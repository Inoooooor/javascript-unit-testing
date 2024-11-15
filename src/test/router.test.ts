// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { normalizePageHash } from '../router'
import { PageName } from '../types'

it('normilizes valid page hash', () => {
  Object.values(PageName).forEach((page) => {
    window.location.hash = page
    expect(normalizePageHash()).toBe(page)

    expect(window.location.hash).toBe(`#${page}`)
  })
})
it('normilizes invalid page hash', () => {
  window.location.hash = 'invalid'
  expect(normalizePageHash()).toBe(PageName.TIMELINE)
  expect(window.location.hash).toBe(`#${PageName.TIMELINE}`)
})
