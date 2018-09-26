'use strict'

const vidslice = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_URL':
      return { ...state, video: { url: action.url } }
      break;
    default:
      return state
  }
}

export default vidslice
