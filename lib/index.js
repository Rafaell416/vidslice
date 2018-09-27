'use strict'

export const secondsToFormatedTime = (seconds) => {
  let date = new Date(null)
  date.setSeconds(seconds)
  let timeString = date.toISOString().substr(11, 8)
  return timeString
}

export const formatedTimeToSeconds = (formatedTime) => {
  const splited = formatedTime.split(':')
  const seconds = (+splited[0]) * 60 * 60 + (+splited[1]) * 60 + (+splited[2])
  return seconds
}
