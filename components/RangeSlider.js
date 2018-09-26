import InputRange from 'react-input-range'
//import react_input_range_styles from 'react-input-range/lib/css/index.css'

const RangeSlider = ({ value, onChange  }) => (
  <div>
    <InputRange
      maxValue={20}
      minValue={0}
      value={value}
      onChange={value => onChange(value)}
    />
    {/* <style jsx global>{`${react_input_range_styles}`}</style> */}
  </div>
)

export default RangeSlider
