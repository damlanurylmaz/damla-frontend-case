import { Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import PropTypes from "prop-types"

const SelectInput = ({label, options, onChange, value, error}) => {
  return (
    <FormItem 
        label={label} 
        layout='vertical'
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

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}