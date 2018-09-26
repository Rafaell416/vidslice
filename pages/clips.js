import { Component } from 'react'
import Layout from '../components/Layout'
import VideoPlayer from '../components/VideoPlayer'
import InputField from '../components/InputField'
import ActionButton from '../components/ActionButton'
import ClipCard from '../components/ClipCard'
import RangeSlider from '../components/RangeSlider'


export default class clips extends Component {
  state = {
    name: '',
    value: {
      min: 2, max: 10
    }
  }

  _handleOnchangeInputValue = (e) => this.setState({ name: e.target.value })

  _checkIfInputIsFilled = () => {
    if (!this.state.name) return true
    return false
  }

  _handleRangeChange = (value) => this.setState({ value })

  render () {
    const { name, value } = this.state
    return (
      <Layout title="Clips">
        <div className="container">
          <div className="section top-section">
            <div className="video-player-view">
              <VideoPlayer
                url="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
                muted
                height="350px"
                width="100%"
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
                <RangeSlider
                  value={value}
                  onChange={this._handleRangeChange}
                />
              </div>
              <div className="button-view centered">
                <ActionButton
                  text="Create clip"
                  backgroundColor="#1abc9c"
                  textColor="white"
                  onClick={() => console.log('pressed button')}
                  disabled={this._checkIfInputIsFilled()}
                />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="clips-list-view">
              <ClipCard
                name="Clip"
                duration="00:00:45"
              />
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
