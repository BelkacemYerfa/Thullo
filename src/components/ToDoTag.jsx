import { motion } from 'framer-motion'
import { useState } from 'react';
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';
import { DeleteCard } from './cardDatachecker/DeleteCard';
import { RenameCard } from './cardDatachecker/RenameCard';
import { TaskCard } from './taskCard';
export const ToDoTag = ({tag , task , id })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [settToggle , setSettToggle] = useState(false);
 const [CardDelete , setCardDelete] = useState(false) ;
 const [CardRename , setCardRename] = useState(false) ;
  const handleRenameCard = (toggle)=>{
    setCardRename(toggle)
  }
 const handleDeleteCard =(toggle)=> {
  setCardDelete(toggle)
 }
 return(
  <>
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
              <div className='SettingInfo'
               onClick={()=>{
                setCardRename(true);
                setSettToggle(false);
               }}
              >
                Rename
                <span className="material-symbols-rounded" >
                  edit 
                </span>
              </div>
              <hr />
              <div 
              onClick={()=>{
                setCardDelete(true);
                setSettToggle(false);
              }}
              className='SettingInfo deleteList'>
                Delete this list
                <span className="material-symbols-rounded" >
                  delete 
                </span>
              </div>
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
            description = {task.description}
            tag={tag}
          />
          ))
        }
        <AddToList holder='Add to list' />
      </div>
    </div>
    {
     CardDelete && (<DeleteCard handleToggle={handleDeleteCard} CardId={id} />)
    }
    {
     CardRename && (<RenameCard handleToggle={handleRenameCard} CardId={id} />)
    }
  </>
 );
}