import { Button } from 'antd';
import './Style/Tasks.scss';
import { useDispatch} from 'react-redux';
import { TasksActions } from './Store/Tasks.slice';
import CreateModal from '../../Components/CreateModal';
import { useEffect } from 'react';
import TaskCard from '../../Components/TaskCard';
import EditModal from '../../Components/EditModal';
import { useSelector } from 'react-redux';

const Tasks = () => {
  const dispatch = useDispatch();
  const {tasks} = useSelector((state) => state.tasks);

  const handleOpenCreateModal = () => {
    dispatch(TasksActions.setIsOpenCreateModal(true));
  };

  useEffect(() => {
    dispatch(TasksActions.setIsOpenCreateModal(false));
  },[]);

  return (
    <div className='tasks-wrapper'>
        <CreateModal />
        <EditModal />
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
                <div className='task-wrapper'>
                  {tasks.filter((task) => task.status === 'New').map((task) => <TaskCard key={task.id} task={task}/>)}
                </div>
            </div>
            <div className='status-card'> 
                <div className='status-name'>
                  <h2>Inprogress</h2>
                </div>
                <div className='task-wrapper'>
                  {tasks.filter((task) => task.status === 'Inprogress').map((task) => <TaskCard key={task.id} task={task}/>)}
                </div>
            </div>
            <div className='status-card'> 
                <div className='status-name'>
                  <h2>Done</h2>
                </div>
                <div className='task-wrapper'>
                  {tasks.filter((task) => task.status === 'Done').map((task) => <TaskCard key={task.id} task={task}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks