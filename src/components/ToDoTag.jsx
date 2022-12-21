import { motion } from 'framer-motion'
import { useDrag, useDrop } from 'react-dnd';
import { useDataLayervValue } from '../config/dataLayer';
import { itemTypes } from '../utils/itemTypes';
import { AddToList } from './addToList';
import { NewTaskCard } from './newTaskCard';
import { TaskCard } from './taskCard';
export const ToDoTag = ({tag , task })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [{ isDragging }, drag] = useDrag({
    type : itemTypes.CARD ,
    item : {
      title : itemTypes.title , 
      image : itemTypes.image , 
      tags : itemTypes.tags , 
      users : itemTypes.users,
    },
    collect : (monitor) => ({
      isDragging : monitor.isDragging()
    }) 
 })
 
 return(
  <div className='taskcolumn' >
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