import { motion } from 'framer-motion'
import { useState } from 'react';
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';
import { TaskCard } from './taskCard';
export const ToDoTag = ({tag , task })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [settToggle , setSettToggle] = useState(false)
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
      className="spred"
       onClick={()=>{
        setSettToggle(!settToggle)
       }}
      >
       <span className="material-symbols-rounded">
        more_horiz
       </span>
      </motion.div>
      {
        settToggle && (
          <motion.div 
           initial={{
            scale : 0
           }}
           animate={{      
            scale : 1
           }}
           exit={{
            scale : 0
           }}
          className='taskColumnSettings' >
            <p className='SettingInfo' >
            Rename
            </p>
            <hr />
            <p className='SettingInfo'>
            Delete this list
            </p>
          </motion.div>
        )
      }
    </div>
    <div className='toDoCards' >
       {
        task?.map(task => (
         <TaskCard 
          title={task.title}
          image={task.image}
          tags={task.tags}
          users={task.users}
          comments={task.comments}
         />
        ))
       }
       <AddToList />
    </div>
  </div>
 );
}