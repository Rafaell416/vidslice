'use strict'

export const addVideoUrl = (url) => ({
  type: 'ADD_VIDEO_URL',
  url
})

export const addClipToClipList = (clip) => ({
  type: 'ADD_CLIP_TO_CLIP_LIST',
  clip
})

export const updateFullVideoDuration = (duration) => ({
  type: 'UPDATE_FULL_VIDEO_DURATION',
  duration
})
