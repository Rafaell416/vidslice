'use strict'

import { Component } from 'react'
import PropTypes from 'prop-types'
import { secondsToFormatedTime } from '../lib'

export default class VideoPlayer extends Component {

  componentDidMount(){
    const video = document.getElementById('video-player')
    video.addEventListener('loadedmetadata', () => {
      const secondsRounded = Math.round(video.duration)

      const formatedStartAt = secondsToFormatedTime('0')
      const formatedEndAt = secondsToFormatedTime(secondsRounded)

      this.props.updateFullVideoDuration({ startAt: formatedStartAt, endAt: formatedEndAt })
      this.props.updateDefaultRangeValuesWhenVideoFinishLoad({
        defaultMin: 0,
        defaultMax: secondsRounded,
        value: {
          min: 0,
          max: 10
        }
      })
    })
  }

  render () {
    const { url, muted, height, width } = this.props
    return (
      <div>
        <video id="video-player" height={height} width={width} controls muted={ muted || false } preload="metadata">
          <source src={url} type="video/mp4"/>
          <p>Your browser doesn't support HTML5 video. Here is a <a href={url}>link to the video</a> instead.</p>
        </video>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string
}
