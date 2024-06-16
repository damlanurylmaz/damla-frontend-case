import { Button, Form, Input, Modal, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import UrgencyInput from './UrgencyInput';

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
        <Form.Item
            layout="vertical"
            label="Title"
            name="Title"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            layout="vertical"
            label="Description"
            name="Description"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input.TextArea />
        </Form.Item>
        <UrgencyInput />
      </div>  
      </Modal>
    </>
  );
};
export default CreateModal;