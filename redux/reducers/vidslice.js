'use strict'

import { v4 } from 'uuid'

const vidslice = (state = {
  video: { url: '' },
  clips: []
}, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return { ...state, video: { url: action.url } }
      break;
    case 'ADD_CLIP_TO_CLIP_LIST':
    const { name, duration, startAt, endAt } = action
      return {
        ...state,
        clips: [
          ...state.clips, {
          name,
          duration,
          startAt,
          endAt
        }]
      }
      break;
    default:
      return state
  }
}

export default vidslice
