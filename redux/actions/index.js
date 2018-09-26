'use strict'

export const addVideoUrl = (url) => ({
  type: 'ADD_VIDEO_URL',
  url
})

export const addClipToClipList = (name, duration, startAt, endAt) => ({
  type: 'ADD_CLIP_TO_CLIP_LIST',
  name,
  duration,
  startAt,
  endAt
})
