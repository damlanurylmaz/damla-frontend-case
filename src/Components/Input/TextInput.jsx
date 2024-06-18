import { Input, Typography } from 'antd'
import PropTypes from "prop-types"

const TextInput = ({label, value, onChange, error}) => {

  return (
    <div>
        <Typography> { label } </Typography>
        <Input status={error !== '' ? 'error' : ''} value={value} onChange={onChange} />
        { error && <p style={{color: 'red'}}>{error}</p> }
    </div>
  )
}

export default TextInput

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
