'use strict'

import Header from '../components/Header'
import Head from 'next/head'
import PropTypes from 'prop-types'
import react_input_range_styles from 'react-input-range/lib/css/index.css'


const Layout = ({ children, title, right, left }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <Header
      title={title}
      right={right}
      left={left}
    />
    {children}
    <style jsx global>
      {`
        body {
          margin: 0;
          background: #F5F9FA;
          font-family: 'Kosugi Maru', sans-serif;
        }
        ${react_input_range_styles}
      `}
    </style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
