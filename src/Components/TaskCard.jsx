import { useDispatch } from 'react-redux';
import '../Pages/Tasks/Style/Tasks.scss';
import { TasksActions } from '../Pages/Tasks/Store/Tasks.slice';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from "prop-types"

const TaskCard = ({task}) => {
  const dispatch = useDispatch();


  const handleEditModal = () => {
    dispatch(TasksActions.setIsOpenEditModal(true));
    dispatch(TasksActions.setEditedTask(task));
  };

  return (
   <Draggable draggableId={task.id}>
      {
        (provided) => (
          <div
            className='task-contain' 
            onClick={handleEditModal}
            data-status={task.status}
            ref={provided.innerRef} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
              <div className='title'>
                  <span>{task.title}</span>
              </div>
              <div className='task-date'>
                  <div>Date: {new Date(task.date).toLocaleDateString("tr-TR")}</div>
                  <div data-urgency={task.urgency} className='urgency'>{task.urgency}</div>      
              </div>
            </div>
        )
      }
   </Draggable>
  )
}

export default TaskCard

TaskCard.propTypes = {
  task: PropTypes.object.isRequired
}
