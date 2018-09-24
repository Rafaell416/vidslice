import { Component } from 'react'
import Header from '../components/Header'
import Head from 'next/head'

export default class Layout extends Component {
  render () {
    const { children, title } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru" rel="stylesheet" />
        </Head>
        <Header title={title} />
        {children}
        <style jsx global>
          {`
            body {
              margin: 0;
              background: #F5F9FA;
              font-family: 'Kosugi Maru', sans-serif;
            }
          `}
        </style>
      </div>
    )
  }
}
