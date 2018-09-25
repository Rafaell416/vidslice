import { Component } from 'react'
import Layout from '../components/Layout'
import UploadVideoCard from '../containers/UploadVideoCard'
import { connect } from 'react-redux'
import { createObject } from '../redux/actions'

class Index extends Component {
  render () {
    const { state, createObject } = this.props
    return (
      <Layout title="Vidslice">
        <div className="container">
          <UploadVideoCard
            state={state}
            createObject={createObject}
          />
        </div>
        <style jsx>
          {`
            .container {
              background-color: transparent;
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
  createObject
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
