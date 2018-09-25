'use strict'

import PropTypes from 'prop-types'

const ActionButton = ({ backgroundColor, text, textColor, onClick, disabled }) => (
  <div className="container">
    <button
      disabled={disabled || false}
      onClick={onClick}
      className={disabled ? '' : 'hover-item'}
      style={!disabled ? {
        background: backgroundColor || '#1abc9c',
        color: textColor || 'white',
      } : {
        background: '#bdc3c7',
        color: '#5E616F',
      }}
    >
      {text}
    </button>
    <style jsx>
      {`
        .container {
          width: 300px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button {
          height: 45px;
          width: 220px;
          font-size: 15px;
          font-weight: bold;
          border-radius: 20px;
          outline: 0;
          border: 2px solid transparent;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }

        .hover-item:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.19);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }

      `}
    </style>
  </div>
)

ActionButton.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default ActionButton
