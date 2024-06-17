import { Draggable } from 'react-beautiful-dnd';
import '../Pages/Tasks/Style/Tasks.scss';
import { useSelector } from 'react-redux';

const TaskCard = () => {
  const {tasks} = useSelector((state) => state.tasks);  

  return (
    <div className="card-wrapper">
        {
            tasks.map((element) => (
                <div key={element.id} className='task-contain'>
                    <div className='title'>
                        <span>Title</span>
                    </div>
                    <div className='task-date'>
                        <div>Date/Time</div>
                        <div>Status</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TaskCard