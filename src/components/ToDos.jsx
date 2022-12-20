import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ToDoTag } from './ToDoTag';
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';

export const ToDos = ()=>{
 const [{toDoList} , dispatch ] = useDataLayervValue()
 return(
  <DndProvider backend={HTML5Backend} >
    <div className="toDo" >
     <div className="tasksHolder" dir='ltr' >
       {
        toDoList?.map(tag => (
          <ToDoTag tag={tag?.tag} task={tag?.task}  />
        ))
       }
       <AddToList />
    </div>
   </div>
  </DndProvider>
 );
}