import { Form, Input, Typography } from 'antd'

const TextInput = ({label, value, onChange, required}) => {

  console.log(value, label);

  return (
    <div>
        <Typography> { label } </Typography>
        <Input value={value} onChange={onChange} />
    </div>
  )
}

export default TextInput