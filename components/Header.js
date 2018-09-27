'use strict'

import PropTypes from 'prop-types'

const Header = ({ title, right, left }) => (
  <div>
    <header>
      <div className="icon-view">
        {left}
      </div>
      <div className="title-view">
        <span>{title}</span>
      </div>
      <div className="icon-view">
        {right}
      </div>
    </header>
    <style jsx>
      {`
        header {
          background: transparent;
          padding: 15px;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }

        header span {
          color: #5E616F;
          font-size: 30px;
        }

        .icon-view {
          height: 30px;
          width: 30px;
          cursor: pointer;
        }
      `}
    </style>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.element
}

export default Header
