import { it, expect } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../activities'
import { Activity } from '../types'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'test',
    secondsToComplete: 300
  }
  const updatedFields: Partial<Activity> = {
    id: '2',
    name: 'updated',
    secondsToComplete: 1300
  }

  const updatedActivity = updateActivity(activity, updatedFields)

  expect(activity).toEqual(updatedFields)
  expect(updatedActivity).toEqual(updatedFields)
})

it('calculates activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'test',
    secondsToComplete: 3600
  }

  const percentageA = calculateActivityCompletionPercentage(activity, 0)
  const percentageB = calculateActivityCompletionPercentage(activity, 1800)
  const percentageC = calculateActivityCompletionPercentage(activity, 3600)

  expect(percentageA).toBe(0)
  expect(percentageB).toBe(50)
  expect(percentageC).toBe(100)
})
