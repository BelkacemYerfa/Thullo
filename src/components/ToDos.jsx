import { ToDoTag } from './ToDoTag';
import { useDataLayervValue } from '../config/dataLayer';
import { AddToList } from './addToList';
import { useEffect, useState } from 'react';

export const ToDos = ()=>{
 const [DataLists , setDataLists] = useState(null);
 const [{toDoList} , dispatch ] = useDataLayervValue()
 useEffect(()=>{
  setDataLists(toDoList)
 } , [])
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
      <AddToList holder='Add List' />
    </div>
   </div>
 );
}