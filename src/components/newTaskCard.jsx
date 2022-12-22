import { useDrop } from 'react-dnd';
import { itemTypes } from '../utils/itemTypes';
import { useDataLayervValue } from '../config/dataLayer';

export const NewTaskCard = ({image , title , users , tags })=>{
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [{isOver} , drop] = useDrop({
  accept : itemTypes.CARD , 
  drop : ()=>{
    alert('new card') 
  } , 
  collect : monitor => ({
    isOver : monitor.isOver()
  })
 })
 return(
  <div ref={drop}  
    className="taskCard"
    style={{
    backgroundColor : isOver ? 'red' : "blue"
    }}
  >
   {
    image !== null || undefined ?
    (<img className='taskImage' src={image} alt='pic' />)
    : null
   }       
   {
    title !== null || undefined ?
    (<h2 className='taskTitle' >{title}</h2>)
    : null
   } 
   <div className="tags" >
   {
    tags?.map(tag => (
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
    users?.map(user=>( 
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
 );
}