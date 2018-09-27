'use strict'

import { v4 } from 'uuid'

const vidslice = (state = {
  video: {
    url: '',
    defaultMin: 0,
    defaultMax: 0,
    value: { min: 0, max: 0 }
  },
  clips: []
}, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return {
        ...state,
        video: {
          ...state.video,
          url: action.url
        }
      }
      break
    case 'ADD_CLIP_TO_CLIP_LIST':
      const { name, startAt, endAt, isFullVideo, selected } = action.clip
      return {
        ...state,
        clips: [
          ...state.clips, {
          id: v4(),
          name,
          startAt,
          endAt,
          isFullVideo: isFullVideo || false,
          selected: selected || false,
        }]
      }
      break
    case 'DELETE_CLIP_FROM_CLIP_LIST':
      const clipId = action.id
      return {
        ...state,
        clips: state.clips.filter(clip => clip.id !== clipId)
      }
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
    case 'TOGGLE_SELECTED_CLIP_CARD':
      return {
        ...state,
        clips: state.clips.map(clip =>
          (clip.selected === true)
          ? { ...clip, selected: false }
          : (clip.selected === false && clip.id === action.id)
            ? {
                ...clip,
                selected: true
              }
            : clip
        )
      }
    break
    case 'UPDATE_DEFAULT_RANGE_VALUES':
      const { defaultMin, defaultMax, value} = action.rangeValues
      return {
        ...state,
        video: {
          ...state.video,
          defaultMax,
          defaultMin,
          value
        }
      }
      break
    case 'UPDATE_RANGE_VALUES_WHEN_IS_DRAGGED':
      return {
        ...state,
        video: {
          ...state.video,
          value: action.value
        }
      }
      break
    case 'RESET_CLIP_LIST_TO_DEFAULT_VALUES':
      return {
        video: {
          url: '',
          defaultMin: 0,
          defaultMax: 0,
          value: { min: 0, max: 0 }
        },
        clips: []
      }
    default:
      return state
  }
}

export default vidslice
