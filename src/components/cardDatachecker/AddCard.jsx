import { motion } from 'framer-motion';
import { useState } from 'react';
import { CoverCard } from '../cardSettingsComponents/CoverCard';

export const AddCard = ({handleToggle})=>{
 const ClosePop = ()=>{
  handleToggle(false)
 }

 const [addCover , setAddCover] = useState(false)

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
     <input className="searchInput" placeholder='Add card title' type="text" id="" />
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
        <CoverCard />
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
     className='BtnAdd' >
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