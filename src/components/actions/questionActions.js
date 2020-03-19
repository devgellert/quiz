import { ADD_QUESTION } from './types'
import { REMOVE_QUESTION } from './types'

export const addQuestion = payload => ({
    type: ADD_QUESTION,
    payload
})

export const removeQuestion = payload => ({
    type: REMOVE_QUESTION,
    payload
})
