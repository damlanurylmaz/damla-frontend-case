import { Form, Input, Typography } from 'antd'

const TextInput = ({label, value, onChange, required, error}) => {

  return (
    <div>
        <Typography> { label } </Typography>
        <Input status={error !== '' ? 'error' : ''} value={value} onChange={onChange} />
        { error && <p style={{color: 'red'}}>{error}</p> }
    </div>
  )
}

export default TextInput