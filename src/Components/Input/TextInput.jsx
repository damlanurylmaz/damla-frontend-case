import { Form, Input } from 'antd'

const TextInput = ({label, value, onChange, required}) => {

  return (
    <Form.Item
        layout="vertical"
        label={label}
        name={label}
        rules={[{ required }]}
    >
        <Input value={value} onChange={onChange} />
    </Form.Item>
  )
}

export default TextInput