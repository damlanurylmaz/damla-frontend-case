import { Button } from 'antd';
import './Style/Tasks.scss';
import { useDispatch} from 'react-redux';
import { TasksActions } from './Store/Tasks.slice';
import CreateModal from '../../Components/CreateModal';
import { useEffect } from 'react';
import TaskCard from '../../Components/TaskCard';

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
        <div className='task-card-container'>
            <div className='status-card'> 
                <div className='status-name'>
                  <h2>New</h2>
                </div>
                <TaskCard />
            </div>
            <div className='status-card'> 
                <div className='status-name'>
                  <h2>Inprogress</h2>
                </div>
                <TaskCard />
            </div>
            <div className='status-card'> 
                <div className='status-name'>
                  <h2>Done</h2>
                </div>
                <TaskCard />
            </div>
        </div>
    </div>
  )
}

export default Tasks