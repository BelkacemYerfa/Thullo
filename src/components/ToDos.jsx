import { ToDoTag } from './ToDoTag';
import { useDataLayervValue } from '../config/dataLayer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AddList } from './ListSettings/AddList';


export const ToDos = ()=>{

 const [{toDoList}] = useDataLayervValue()

 const [ addList , setAddList ] = useState(false);

 const handleToggleState = (toggle)=>{
  setAddList(toggle)
 }
 return(
    <>
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
        className='addListUnique' 
        onClick={()=>{
          setAddList(true)
        }}
        >
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
      {
        addList && (
          <AddList handleToggle={handleToggleState} />
        )
      }
    </>
 );
}