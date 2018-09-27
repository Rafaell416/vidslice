'use strict'

import { v4 } from 'uuid'

const vidslice = (state = { video: { url: '' }, clips: [] }, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return { ...state, video: { url: action.url } }
      break
    case 'ADD_CLIP_TO_CLIP_LIST':
      const { name, startAt, endAt, isFullVideo } = action.clip
      return {
        ...state,
        clips: [
          ...state.clips, {
          id: v4(),
          name,
          startAt,
          endAt,
          isFullVideo
        }]
      }
      break
    case 'UPDATE_FULL_VIDEO_DURATION':
      return {
        ...state,
        clips: state.clips.map(clip =>
          (clip.isFullVideo === true)
          ? {
              ...clip,
              startAt: action.duration.startAt,
              endAt: action.duration.endAt
            }
          : clip
        )
      }
      break
    default:
      return state
  }
}

export default vidslice
