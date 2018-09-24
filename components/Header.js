'use strict'

import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <div>
    <header>
      <span>{title}</span>
    </header>
    <style jsx>
      {`
        header {
          background: transparent;
          padding: 20px;
          text-align: center;
        }

        header span {
          color: #5E616F;
          font-size: 30px;
        }
      `}
    </style>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
