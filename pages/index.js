import { Component } from 'react'
import Layout from '../components/Layout'
import UploadVideoCard from '../containers/UploadVideoCard'

export default class extends Component {
  render () {
    return (
      <Layout title="Vidslice">
        <div className="container">
          <UploadVideoCard />
        </div>
        <style jsx>
          {`
            .container {
              background-color: transparent;
              display: flex;
              flex: 1;
              justify-content: center;
              position: absolute;
              height: 100%;
              width: 100%;
            }
          `}
        </style>
      </Layout>
    )
  }
}
