import { Component } from 'react'
import Layout from '../components/Layout'
import VideoPlayer from '../components/VideoPlayer'
import InputField from '../components/InputField'
import ActionButton from '../components/ActionButton'

export default class extends Component {
  state = {
    name: ''
  }

  _handleOnchangeInputValue = (e) => this.setState({ name: e.target.value })

  _checkIfInputIsFilled = () => {
    if (!this.state.name) return true
    return false
  }

  render () {
    const { name } = this.state
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
              <div className="slider-view centered">
                SLIDER
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
            BOTTOM SECTION
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
            }

            .top-section .form-view {
              display: grid;
              grid-template-rows: repeat(3, auto);
            }

            .name-input-view {

            }

            .slider-view {
              background: #8e44ad;
            }

            .button-view {
              
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
