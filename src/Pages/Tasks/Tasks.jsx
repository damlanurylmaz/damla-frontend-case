import { Button } from 'antd';
import './Style/Tasks.scss';
import { useDispatch} from 'react-redux';
import { TasksActions } from './Store/Tasks.slice';
import CreateModal from '../../Components/CreateModal';
import { useEffect } from 'react';

const Tasks = () => {
  const dispatch = useDispatch();

  const handleOpenCreateModal = () => {
    dispatch(TasksActions.setIsOpenCreateModal(true));
  };

  useEffect(() => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
  },[]);

  return (
    <div className='tasks-wrapper'>
        <CreateModal />
        <div className="header">
            <h1>Task Tracking </h1>
        </div>
        <div className='add-new-task'>
            <Button onClick={handleOpenCreateModal} type="primary">
                Add New
            </Button>
        </div>
    </div>
  )
}

export default Tasks