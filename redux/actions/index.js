'use strict'

export const addVideoUrl = (url) => ({
  type: 'ADD_VIDEO_URL',
  url
})

export const addClipToClipList = (clip) => ({
  type: 'ADD_CLIP_TO_CLIP_LIST',
  clip
})

export const deleteClipFromClipList = (id) => ({
  type: 'DELETE_CLIP_FROM_CLIP_LIST',
  id
})

export const updateFullVideoDuration = (duration) => ({
  type: 'UPDATE_FULL_VIDEO_DURATION',
  duration
})

export const toggleSelectClipCard = (id) => ({
  type: 'TOGGLE_SELECTED_CLIP_CARD',
  id,
})

export const updateDefaultRangeValuesWhenVideoFinishLoad = (rangeValues) => ({
  type: 'UPDATE_DEFAULT_RANGE_VALUES',
  rangeValues
})

export const updateRangeValues = (value) => ({
  type: 'UPDATE_RANGE_VALUES_WHEN_IS_DRAGGED',
  value
})
