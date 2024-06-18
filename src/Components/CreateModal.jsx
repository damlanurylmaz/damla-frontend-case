import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import TextInput from './Input/TextInput';
import SelectInput from './Input/SelectInput';
import { useState } from 'react';
import '../Pages/Tasks/Style/Tasks.scss';

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
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    urgency: ''
  });
  
  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
    urgency: ''
  })

  const validateFormValue = () => {
    const errors = {};
    if(formValue.title === '') {
      errors.title = 'Cannot be empty!'
    } else {
      errors.title = ''
    }

    if(formValue.description === '') {
      errors.description = 'Cannot be empty!'
    }
    else {
      errors.description = ''
    }

    if(formValue.urgency === '') {
      errors.urgency = 'Cannot be empty!'
    } else {
      errors.urgency = ''
    }
    setErrors(errors);
    return errors;
  };

  const handleOk = () => {
    const errorsData = validateFormValue();
    if(errorsData.title === '' && errorsData.description === '' && errorsData.urgency === '') {
      dispatch(TasksActions.setIsOpenCreateModal(false));
      dispatch(TasksActions.addTask({...formValue, id:  crypto.randomUUID(),  status: 'New', date: Date()}));
      setFormValue({title: '', description: '', urgency: ''});
    }
  };
  
  const handleCancel = () => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
  };

  const handleFormValue = (key, value) => {
    setFormValue({...formValue, [key]: value});
  };

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
            label='* Title'
            value={formValue.title}
            onChange={(e) => handleFormValue('title', e.target.value)}
            error={errors.title}
        />
        <TextInput 
            label='* Description'
            value={formValue.description}
            onChange={(e) => handleFormValue('description', e.target.value)}
            error={errors.description}
        />
        <SelectInput
            label='* Urgency'
            options={urgencyOptions}
            value={formValue.urgency}
            onChange={(val) => handleFormValue('urgency', urgencyOptions.find((option) => option.value === val).label)}
            error={errors.urgency}
        />
      </div>  
      </Modal>
    </>
  );
};
export default CreateModal;