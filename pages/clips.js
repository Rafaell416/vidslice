import { Component } from 'react'
import Layout from '../components/Layout'
import VideoPlayer from '../containers/VideoPlayer'
import InputField from '../components/InputField'
import ActionButton from '../components/ActionButton'
import ClipCard from '../components/ClipCard'
import InputRange from 'react-input-range'
import { secondsToFormatedTime } from '../lib'
import { connect } from 'react-redux'
import Router from 'next/router'
import {
  addVideoUrl,
  updateRangeValues,
  addClipToClipList,
  toggleSelectClipCard,
  deleteClipFromClipList,
  updateFullVideoDuration,
  resetClipListToDefaultValues,
  updateDefaultRangeValuesWhenVideoFinishLoad
} from '../redux/actions'

class cls extends Component {
  state = {
    name: ''
  }

  _handleOnchangeInputValue = (e) => this.setState({ name: e.target.value })

  _checkIfInputIsFilled = () => {
    if (!this.state.name) return true
    return false
  }

  _handleRangeChange = (value) => this.props.updateRangeValues(value)

  _onClickClipCard = (id, startAt, endAt) => {
    const { url } = this.props.state.vidslice.video
    const matchUrl = url.match(/https?.*?\.mp4/g)
    const cleanUrl = matchUrl[0]
    const urlWithMediaFragments = `${cleanUrl}#t=${startAt},${endAt}`

    this.props.toggleSelectClipCard(id)
    this.props.addVideoUrl(urlWithMediaFragments)

    const video = document.getElementById('video-player')
    video.load()
    video.play()
  }

  _createClip = () => {
    const { name } = this.state
    const { min, max } = this.props.state.vidslice.video.value

    const startAt = secondsToFormatedTime(min)
    const endAt = secondsToFormatedTime(max)

    this.props.addClipToClipList({
      name,
      endAt,
      startAt
    })

    this.setState({ name: '' })
    this.props.updateRangeValues({ min: 0, max: 10 })
  }

  _handleDeleteCLip = (e, id) => {
    e.stopPropagation()
    const { url } = this.props.state.vidslice.video
    const matchUrl = url.match(/https?.*?\.mp4/g)
    const cleanUrl = matchUrl[0]

    this.props.addVideoUrl(cleanUrl)
    this.props.deleteClipFromClipList(id)

    const video = document.getElementById('video-player')
    video.load()

  }

  _handleEditClip = (e, id) => {
    e.stopPropagation()

  }

  _resetClipList = () => {
    this.props.resetClipListToDefaultValues()
    Router.push('/')
  }

  render () {
    const { name } = this.state
    const { clips, video: { url, defaultMin, defaultMax, value }} = this.props.state.vidslice
    return (
      <Layout
        title="Clips"
        right={<i className="material-icons" onClick={this._resetClipList}>clear</i>}
      >
        <div className="container">
          <div className="section top-section">
            <div className="video-player-view">
              <VideoPlayer
                url={url}
                muted
                height="350px"
                width="100%"
                { ...this.props }
              />
            </div>
            <div className="form-view">
              <div className="name-input-view centered">
                <InputField
                  placeholder="Write a name for your clip"
                  value={name}
                  onChange={this._handleOnchangeInputValue}
                />
              </div>
              <div className="slider-view">
                <InputRange
                  maxValue={defaultMax}
                  minValue={defaultMin}
                  value={value}
                  onChange={this._handleRangeChange}
                  ariaLabelledby="hello"
                />
              </div>
              <div className="button-view centered">
                <ActionButton
                  text="Create clip"
                  backgroundColor="#1abc9c"
                  textColor="white"
                  onClick={this._createClip}
                  disabled={this._checkIfInputIsFilled()}
                />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="clips-list-view">
              {clips.map(clip => (
                <ClipCard
                  key={clip.id}
                  {...clip}
                  onClick={this._onClickClipCard}
                  deleteClip={this._handleDeleteCLip}
                  editClip={this._handleEditClip}
                />
              ))}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .container {
              display: grid;
              grid-gap: 20px;
              grid-template-rows: 350px 300px;
            }

            .section {

            }

            .top-section {
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 800px auto;
            }

            .video-player-view {
              background: black;
              margin-left: 10px;
            }

            .top-section .form-view {
              display: grid;
              grid-template-rows: repeat(3, auto);
            }

            .name-input-view {

            }

            .slider-view {
              display: grid;
              align-items: center;
              padding: 20px;
            }

            .button-view {

            }

            .clips-list-view {
              padding-top: 20px;
              padding-left: 10px;
              padding-right: 10px;
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              grid-gap: 20px;
            }

            .centered {
              display: grid;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  addVideoUrl,
  updateRangeValues,
  addClipToClipList,
  toggleSelectClipCard,
  deleteClipFromClipList,
  updateFullVideoDuration,
  resetClipListToDefaultValues,
  updateDefaultRangeValuesWhenVideoFinishLoad
}

const Clips = connect(mapStateToProps, mapDispatchToProps)(cls)
export default Clips
