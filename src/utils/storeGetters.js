import { getStore } from '../store'
import { fetchStoryInfo } from '../store/storiesReducer'

const store = getStore()

export function getStoriesByPage () {
  const state = store.getState().stories
  const stories  = state.stories
  const perPage = state.perPage
  const page = state.page
  const startIndex = perPage * page - perPage
  const endIndex = startIndex + perPage > stories.length ? stories.length - 1 : startIndex + perPage
  const currentStories = stories.slice(startIndex, endIndex)
  for (const item of currentStories) {
    if (typeof item !== 'object') {
      store.dispatch(fetchStoryInfo(item))
    }
  }
  return currentStories
}
