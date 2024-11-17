import { it, expect, describe, beforeEach } from 'vitest'
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

  it('calculates activity completion percentage', () => {

    const percentageA = calculateActivityCompletionPercentage(activity, 0)
    const percentageB = calculateActivityCompletionPercentage(activity, 1800)
    const percentageC = calculateActivityCompletionPercentage(activity, 3600)

    expect(percentageA).toBe(0)
    expect(percentageB).toBe(50)
    expect(percentageC).toBe(100)
  })
})
