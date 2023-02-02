import { motion } from 'framer-motion';
import { useState } from 'react';
import { CoverCard } from '../cardSettingsComponents/CoverCard';
import { useDataLayervValue } from '../../config/dataLayer'

export const AddCard = ({handleToggle , listId})=>{
 console.log(listId)

 const [{toDoList} , dispatch ] = useDataLayervValue();
 const [addTitle , setAddTitle] = useState(null)
 const [addCoverImage , setAddCoverImage] = useState(null)
 const [addCover , setAddCover] = useState(false)


 const ClosePop = ()=>{
  handleToggle(false)
 }
 const HandleCardNewImage = async(newCardCover)=>{
  setAddCoverImage(newCardCover)
 }
  const HandleAddCard = ()=>{
    toDoList[listId.slice(4,5)-1].task.push({
      id : `task${toDoList[listId.slice(4,5)-1]
        .task[toDoList[listId.slice(4,5)-1].task.length-1].id.slice(4,5)+1}` , 
      image : addCoverImage ,
      title :addTitle,
      tags : null , 
      users : [ 
        {
          name : 'kratos',
          image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg',
          id : 'user1' , 
        } , 
      ],
      comments : null , 
      description : null ,
    })
    dispatch({
      type : 'ADD_NEW_CARD' ,
      toDoList : toDoList
    })
    ClosePop()
  }
 return(
  <motion.div
  initial={{
   y : '100vh' , 
   opacity : 0
  }}
  whileInView={{
   y : 0 , 
   opacity : 1
  }}
  className="DeletePopOutCover" >
   <motion.div 
   initial={{
    scale : 0
   }}
   whileInView={{
    scale : 1
   }}
   transition={{delay : .25}}
   className="deletePopCover" >
    <motion.div
      whileTap={{
        scale : .9
      }}
    className="CloseBtn" 
      onClick={ClosePop}
    >
      <span class="material-symbols-rounded">
      close
      </span>
    </motion.div>
    <img className="" src='' alt="" />
    <form action="" className="CardFormat formatRename " >
     <input className="searchInput" 
     placeholder='Add card title' type="text" id="" 
     onChange={(e)=>{
        if(e.target.value !== '' || undefined || null){
          setAddTitle(e.target.value)
        }
     }}
     />
    </form>
    <div className="BtnFormHolder" >
     <motion.div
      whileTap={{
        scale : .9
      }}
      id='cover2'
      className='actionData addImage ' 
      onClick={()=>{
        setAddCover(!addCover)
      }}
      >
        <span class="material-symbols-rounded">
          image
        </span>
        cover
      </motion.div>
      <motion.div
      whileTap={{
        scale : .9
      }}
      id='cover2'
      className='actionData addImage ' >
        <span class="material-symbols-rounded">
          add_a_photo
        </span>
        add your cover
      </motion.div>
    </div>
    {
      addCover && (
        <CoverCard 
         listId={listId} 
         handleImage={HandleCardNewImage} 
        />
      )
    }
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
      onClick={HandleAddCard}
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