'use strict'

import PropTypes from 'prop-types'

const Header = ({ title, right, left }) => (
  <div>
    <header>
      <div className="container">
        <div className="icon-view">
          {left}
        </div>
        <div className="title-view">
          <span>{title}</span>
        </div>
        <div className="icon-view">
          {right}
        </div>
      </div>
      <div className="subheader">
        <span>Experiment trimming your favourite videos</span>
      </div>
    </header>
    <style jsx>
      {`
        header .container {
          background: transparent;
          padding: 15px;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }

        .subheader {
          display: grid;
          align-items: center;
          justify-content: center;
        }

        header span {
          color: #5E616F;
          font-size: 30px;
        }

        .subheader span {
          color: #5E616F;
          font-size: 18px;
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
