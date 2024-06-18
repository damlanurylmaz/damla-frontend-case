import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import TextInput from './Input/TextInput';
import SelectInput from './Input/SelectInput';
import { useEffect, useState } from 'react';

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

const statusOptions = [
    {
        value: '1',
        label: 'New',
    },
    {
        value: '2',
        label: 'Inprogress',
    },
    {
        value: '3',
        label: 'Done',
    }
];

const EditModal = () => {
  const dispatch = useDispatch();
  const isOpenEditModal = useSelector((state) => state.tasks.isOpenEditModal);
  const editedTask = useSelector((state) => state.tasks.editedTask);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    urgency: ''
  });

  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
    urgency: '',
    status: ''
  });

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
      dispatch(TasksActions.setIsOpenEditModal(false));
      dispatch(TasksActions.updateTask({...editedTask, ...formValue}));
    }
  };

  const handleCancel = () => {
    dispatch(TasksActions.setIsOpenEditModal(false));
  };

  const handleFormValue = (key, value) => {
    setFormValue({...formValue, [key]: value});
  };

  useEffect(() => {
    if(isOpenEditModal) {
      setFormValue({
        title: editedTask.title,
        description: editedTask.description,
        urgency: editedTask.urgency,
        status: editedTask.status
      })
    }
    
  }, [isOpenEditModal, editedTask]);

  return (
    <>
      <Modal
        open={isOpenEditModal}
        title="Detail and Edit Task"
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
        <SelectInput
            label='Change Status'
            options={statusOptions}
            onChange={(val) => handleFormValue('status', statusOptions.find((option) => option.value === val).label)}
            value={formValue.status}
        />
      </div>  
      </Modal>
    </>
  );
};
export default EditModal;