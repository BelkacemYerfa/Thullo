import { motion } from 'framer-motion'
import { useDrag, useDrop } from 'react-dnd';
import { useDataLayervValue } from '../config/dataLayer';
import { itemTypes } from '../utils/itemTypes';
import { AddToList } from './addToList';
import { NewTaskCard } from './newTaskCard';
import { TaskCard } from './taskCard';
export const ToDoTag = ({tag , task })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [{isOver} , drop] = useDrop({
  accept : itemTypes.CARD , 
  DropFunc : ()=>{
    alert('card')
  },
  collect : monitor => ({
    isOver : monitor.isOver()
  })
 })
 return(
  <div ref={drop} className='taskcolumn' >
    <div className="tag" >
      <p className="tagname" >
        {tag}
      </p>
      <motion.div 
       whileTap={{
        scale : .9
       }}
       transition = {{
        duration : .1
       }}
      className="spred" >
       <span className="material-symbols-rounded">
        more_horiz
       </span>
      </motion.div>
    </div>
    <div className='toDoCards' >
       {
        task?.map(task => (
         <TaskCard 
          title={task.title}
          image={task.image}
          tags={task.tags}
          users={task.users}
         />
        ))
       }
       <NewTaskCard />
       <AddToList />
    </div>
  </div>
 );
}