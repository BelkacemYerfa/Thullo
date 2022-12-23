import { motion } from 'framer-motion'
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';
import { TaskCard } from './taskCard';
export const ToDoTag = ({tag , task })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 return(
  <div  className='taskcolumn' >
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
       <AddToList />
    </div>
  </div>
 );
}