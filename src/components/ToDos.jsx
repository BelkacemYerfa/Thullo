import { ToDoTag } from './ToDoTag';
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';

export const ToDos = ()=>{
 const [{toDoList} , dispatch ] = useDataLayervValue()
 return(
    <div className="toDo" >
     <div className="tasksHolder" dir='ltr' >
       {
        toDoList?.map(tag => (
          <ToDoTag tag={tag?.tag} task={tag?.task}  />
        ))
      }
      <AddToList holder='Add another List' />
    </div>
   </div>
 );
}