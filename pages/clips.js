import { Component } from 'react'
import Layout from '../components/Layout'

export default class extends Component {
  render () {
    return (
      <Layout title="Clips">
        <div className="container">
          <div className="section top-section">
            <div className="video-player-view">
              <video id="video-player" controls muted preload="metadata">
                <source src="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4" type="video/mp4"/>
                <p>Your browser doesn't support HTML5 video. Here is a <a href="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4">link to the video</a> instead.</p>
              </video>
            </div>
            <div className="form-view">
              <div className="name-input-view centered">
                NAME INPUT
              </div>
              <div className="slider-view centered">
                SLIDER
              </div>
              <div className="button-view centered">
                BUTTON
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
              background: #e74c3c
            }

            .slider-view {
              background: #8e44ad;
            }

            .button-view {
              background: #e67e22;
            }

            .centered {
              display: grid;
              align-items: center;
              justify-content: center;
            }

            #video-player {
              height: 350px;
              width: 100%;
            }
          `}
        </style>
      </Layout>
    )
  }
}
