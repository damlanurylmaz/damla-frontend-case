import { useDispatch } from 'react-redux';
import '../Pages/Tasks/Style/Tasks.scss';
import { useSelector } from 'react-redux';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';

const TaskCard = ({task}) => {
  const dispatch = useDispatch();


  const handleEditModal = () => {
    dispatch(TasksActions.setIsOpenEditModal(true));
    dispatch(TasksActions.setEditedTask(task));
  };

  return (
    <div 
      key={task.id} 
      className='task-contain' 
      onClick={handleEditModal}
      data-status={task.status}
    >
        <div className='title'>
            <span>{task.title}</span>
        </div>
        <div className='task-date'>
            <div>{new Date(task.date).toLocaleDateString("tr-TR")}</div>
            <div data-urgency={task.urgency} className='urgency'>{task.urgency}</div>      
        </div>
    </div>
  )
}

export default TaskCard