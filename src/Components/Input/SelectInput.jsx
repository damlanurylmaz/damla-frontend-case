import { Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'

const SelectInput = ({label, options, required, onChange, value, error}) => {
  return (
    <FormItem 
        label={label} 
        layout='vertical' 
        required={required}
    >
        <Select
            showSearch
            style={{
                width: '100%',
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            options={options}
            onChange={onChange}
            value={value}
            status={error ? 'error' : ''}
        />
        { error && <p className='error-message'>{error}</p> }
    </FormItem>
  )
}

export default SelectInput