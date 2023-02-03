import { ToDoTag } from './ToDoTag';
import { useDataLayervValue } from '../config/dataLayer';
import { motion } from 'framer-motion';
export const ToDos = ()=>{

 const [{toDoList}] = useDataLayervValue()

 return(
    <div className="toDo" >
     <div className="tasksHolder" dir='ltr' >
       {
        toDoList?.map(tag => (
          <ToDoTag 
           tag={tag?.tag} 
           task={tag?.task} 
           id={tag?.id} 
          />
        ))
      }
      <motion.div 
      whileTap={{
        scale : .9
      }}
      style={{
      width : 300 
      }}
      className='addList' >
        <div className="uniqueTag" >
          <p className="addText" >
            Add another List
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
            add
          </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
   </div>
 );
}