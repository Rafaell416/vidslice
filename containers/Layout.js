import { Component } from 'react'
import Header from '../components/Header'

export default class Layout extends Component {
  render () {
    const { children, title } = this.props
    return (
      <div>
        <Header title={title} />
        {children}
        <style jsx>
          {`
            div {
              background-color: #F5F9FA;
              width: 100%;
              height: 100%;
              position: absolute;
            }
          `}
        </style>
      </div>
    )
  }
}
