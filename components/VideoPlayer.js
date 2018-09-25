'use strict'

import PropTypes from 'prop-types'

const VideoPlayer = ({ url, muted, height, width }) => (
  <div>
    <video id="video-player" height={height} width={width} controls muted={ muted || false } preload="metadata">
      <source src={url} type="video/mp4"/>
      <p>Your browser doesn't support HTML5 video. Here is a <a href={url}>link to the video</a> instead.</p>
    </video>
  </div>
)

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string
}

export default VideoPlayer
