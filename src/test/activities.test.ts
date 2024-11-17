import { it, expect, describe, beforeEach, test } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../activities'
import { Activity } from '../types'

let activity: Activity

beforeEach(() => {
  activity = {
    id: '1',
    name: 'test',
    secondsToComplete: 3600
  }
})

describe('updateActivity', () => {
  const updatedFields: Partial<Activity> = {
    id: '2',
    name: 'updated',
    secondsToComplete: 1300
  }

  it('updates original activity', () => {
    expect(updateActivity(activity, updatedFields)).toEqual(updatedFields)
  })

  it('returns updated activity', () => {
    const updatedActivity = updateActivity(activity, updatedFields)
    expect(updatedActivity).toEqual(updatedFields)
  })

  test.each([
    [0, 0],
    [1800, 50],
    [3600, 100]
  ])('calculateActivityCompletionPercentage(%i) => %i', (seconds, percentage) => {
    expect(calculateActivityCompletionPercentage(activity, seconds)).toBe(percentage)
  })
})
