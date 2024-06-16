import { Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const UrgencyInput = () => (
    <FormItem layout="vertical" label='Urgency' rules={[{required: true}]}>
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
            options={[
                {
                    value: '1',
                    label: 'Urgent',
                },
                {
                    value: '2',
                    label: 'High',
                },
                {
                    value: '3',
                    label: 'Low',
                }
            ]}
        />
    </FormItem>
);
export default UrgencyInput;