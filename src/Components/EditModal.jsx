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

  const handleOk = () => {
    dispatch(TasksActions.setIsOpenEditModal(false));
  };
  const handleCancel = () => {
    dispatch(TasksActions.setIsOpenEditModal(false));
  };
  return (
    <>
      <Modal
        open={isOpenEditModal}
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
        <SelectInput
            label='Change Status'
            options={statusOptions}
            required={false}
        />
      </div>  
      </Modal>
    </>
  );
};
export default EditModal;