import { motion } from "framer-motion";
import { useDataLayervValue } from "../../config/dataLayer";
import { useState } from "react";

export const AddList = ({ handleToggle })=>{

 
 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [addListTitle , setAddListTitle] = useState(null)
 
 const ClosePop = ()=>{
  handleToggle(false)
 }

 return (
  <motion.div
  initial={{
   y : '100vh' , 
   opacity : 0
  }}
  whileInView={{
   y : 0 , 
   opacity : 1
  }}
  className="DeletePopOut" >
   <motion.div
   initial={{
    scale : 0
   }}
   whileInView={{
    scale : 1
   }}
   transition={{delay : .25}}
   className="deletePop renamePop " >
    <h2 className="DeleteText" >
     Create a New List
    </h2>
    <form action="" className="CardFormat formatRename " >
     <input 
      className="searchInput"
      placeholder="List Name ..." 
      type="text" name="" 
      id="" 
      onChange={(e)=>{
        if(e.target.value !== '' || undefined || null){
          setAddListTitle(e.target.value)
        }
      }}
      />
    </form>
    <div className='BtnCardHolder' >
     <motion.div
      className='CommentBtn'
      onClick={ClosePop} >
       Cancel
     </motion.div>
     <motion.div
      whileTap={{
       scale : .9
      }}
     className='BtnAdd' 
     onClick={()=>{
      toDoList.push({
       id : `list${toDoList.length + 1}` ,
       tag : addListTitle ,
       task : [],
      })
      dispatch({
        type : 'ADD_NEW_LIST' ,
        toDoList : toDoList
      })
      ClosePop()
     }}
     >
      <span class="material-symbols-rounded">
       add
      </span>
       Add
     </motion.div>
    </div>
   </motion.div>
  </motion.div>
 )
}