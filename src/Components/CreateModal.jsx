import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import TextInput from './Input/TextInput';
import SelectInput from './Input/SelectInput';
import { useState } from 'react';

const urgencyOptions = [
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
];

const CreateModal = () => {
  const dispatch = useDispatch();
  const isOpenCreateModal = useSelector((state) => state.tasks.isOpenCreateModal);
  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
    urgency: ''
  })

  const handleOk = () => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
    dispatch(TasksActions.addTask({...formValue, status: 'NEW', date: Date()}));
    setFormValue({title: '', description: '', urgency: ''})
  };
  const handleCancel = () => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
  };

  const handleFormValue = (key, value) => {
    setFormValue({...formValue, [key]: value});
  };

  console.log(formValue)

  return (
    <>
      <Modal
        open={isOpenCreateModal}
        title="Create New Task"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
      <div className='form-container'>
      <TextInput
            label='Title'
            required
            value={formValue.title}
            onChange={(e) => handleFormValue('title', e.target.value)}
        />
        <TextInput 
            label='Description'
            required
            value={formValue.description}
            onChange={(e) => handleFormValue('description', e.target.value)}
        />
        <SelectInput
            label='Urgency'
            options={urgencyOptions}
            required
            value={formValue.urgency}
            onChange={(val) => handleFormValue('urgency', val)}
        />
      </div>  
      </Modal>
    </>
  );
};
export default CreateModal;