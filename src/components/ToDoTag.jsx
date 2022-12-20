import { motion } from 'framer-motion'
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';
export const ToDoTag = ({tag , task })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue()
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
         <div className="taskCard" >
            {
             task.image !== null || undefined ?
             (<img className='taskImage' src={task?.image} alt='pic' />)
             : null
            }       
            {
             task.title !== null || undefined ?
             (<h2 className='taskTitle' >{task.title}</h2>)
             : null
            } 
            <div className="tags" >
            {
             task.tags?.map(tag => (
              <div className="tagNameTable" style={{
                color : tag.bg , 
                backgroundColor : tag.fontColor
              }} >
                {
                 tag.tagName
                }
              </div>
             ))
            }
          </div>
          <div className="users" >
            {
             task.users?.map(user=>( 
               <div className="imageHolder" >
                 {
                  user?.image !== null || undefined || '' ?
                  (
                    <img 
                    className="userImage image" 
                    src={user?.image}
                    height={70} width={70}
                    alt="userImage" 
                    />
                  ) 
                  : null
                 }
               </div>
             ))
            }
          </div>
        </div>
        ))
       }
       <AddToList />
    </div>
  </div>
 );
}