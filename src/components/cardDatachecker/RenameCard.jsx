import { motion } from "framer-motion" ;

export const RenameCard = ({handleToggle , CardId})=>{
 console.log(CardId)
 const ClosePop = ()=>{
  handleToggle(false)
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
     Rename the Card
    </h2>
    <form action="" className="CardFormat formatRename " >
     <input className="searchInput" placeholder="new Name ..." type="text" name="" id="" />
    </form>
    <div className="btnHodler" >
      <motion.button
       whileTap={{scale : .9}}
       type="submit" 
       className="CommentBtn NopeBtn" 
       onClick={ClosePop}
       >
       Save
      </motion.button>
      <motion.button 
      whileTap={{scale : .9}}
      type="submit" 
      className="CommentBtn"
      onClick={ClosePop}
      >
       Cancel
      </motion.button>
    </div>
   </motion.div>
  </motion.div>
 )
}