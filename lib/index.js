'use strict'

export const secondsToFormatedTime = (seconds) => {
  let date = new Date(null)
  date.setSeconds(seconds)
  let timeString = date.toISOString().substr(11, 8)
  return timeString
}
