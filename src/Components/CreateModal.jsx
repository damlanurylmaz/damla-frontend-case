import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import TextInput from './Input/TextInput';
import SelectInput from './Input/SelectInput';

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

  const handleOk = () => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
  };
  const handleCancel = () => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
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
            label='Title'
            required
        />
        <TextInput 
            label='Description'
            required
        />
        <SelectInput
            label='Urgency'
            options={urgencyOptions}
            required
        />
      </div>  
      </Modal>
    </>
  );
};
export default CreateModal;