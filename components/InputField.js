'use strict'

import PropTypes from 'prop-types'

const InputField = ({ placeholder, value, onChange }) => (
  <div>
    <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
    <style jsx>
      {`
        input {
          width: 300px;
          height: 48px;
          background: rgba(255,255,255,.2);
          box-shadow: 0 1px 0 rgba(255,255,255,.1);
          font-size: 15px;
          outline: 0;
          padding-left: 10px;
          border: none;
          border-bottom: 2px solid rgba(25,53,71,.09);
        }

        input:focus {
          border-bottom: 2px solid #1abc9c;
        }
      `}
    </style>
  </div>
)

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputField
