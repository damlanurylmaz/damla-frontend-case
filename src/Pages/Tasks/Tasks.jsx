import { Button } from 'antd';
import './Style/Tasks.scss';
import { useDispatch} from 'react-redux';
import { TasksActions } from './Store/Tasks.slice';
import CreateModal from '../../Components/CreateModal';
import { useEffect } from 'react';
import TaskCard from '../../Components/TaskCard';
import EditModal from '../../Components/EditModal';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Tasks = () => {
  const dispatch = useDispatch();
  const {tasks} = useSelector((state) => state.tasks);

  const handleOpenCreateModal = () => {
    dispatch(TasksActions.setIsOpenCreateModal(true));
  };

  const handleDrag = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task.id === result.draggableId) {
        return { ...task, status: result.destination.droppableId };
      }
      return task;
    });
  
    dispatch(TasksActions.setTasks(updatedTasks));
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
        <DragDropContext onDragEnd={(result) => (handleDrag(result))}>
          <div className='task-card-container'>
              <div className='status-card'> 
                  <div className='status-name'>
                    <h2>New</h2>
                  </div>
                  <Droppable droppableId='New' direction='vertical'>
                    {
                      (provided) => (
                        <div className='task-wrapper' ref={provided.innerRef} {...provided.droppableProps}>
                          {tasks.filter((task) => task.status === 'New').map((task) => <TaskCard key={task.id} task={task}/>)}
                        </div>
                      )
                    }
                  </Droppable>
              </div>
              <div className='status-card'> 
                  <div className='status-name'>
                    <h2>Inprogress</h2>
                  </div>
                  <Droppable droppableId='Inprogress' direction='vertical'>
                    {
                      (provided) => (
                        <div className='task-wrapper' ref={provided.innerRef} {...provided.droppableProps}>
                          {tasks.filter((task) => task.status === 'Inprogress').map((task) => <TaskCard key={task.id} task={task}/>)}
                        </div>
                      )
                    }
                  </Droppable>
              </div>
              <div className='status-card'> 
                  <div className='status-name'>
                    <h2>Done</h2>
                  </div>
                  <Droppable droppableId='Done' direction='vertical'>
                    {
                      (provided) => (
                        <div className='task-wrapper' ref={provided.innerRef} {...provided.droppableProps}>
                          {tasks.filter((task) => task.status === 'Done').map((task) => <TaskCard key={task.id} task={task}/>)}
                        </div>
                      )
                    }
                  </Droppable>
              </div>
          </div>
        </DragDropContext>
    </div>
  )
}

export default Tasks
