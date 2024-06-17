import { Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'

const SelectInput = ({label, options, required}) => {
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
            filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
    </FormItem>
  )
}

export default SelectInput