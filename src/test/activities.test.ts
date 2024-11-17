import { it, expect, describe } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../activities'
import { Activity } from '../types'

describe('updateActivity', () => {
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


  it('updates original activity', () => {
    expect(activity).toEqual(updatedFields)
  })

  it('returns updated activity', () => {
    expect(updatedActivity).toEqual(updatedFields)
  })
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
