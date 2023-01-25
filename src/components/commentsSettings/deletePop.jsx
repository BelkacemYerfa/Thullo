import { motion } from "framer-motion";
import { useDataLayervValue } from "../../config/dataLayer";

export const DeletePop = ({handleToggle , CommentId , taskId})=>{
  const [{toDoList} , dispatch] = useDataLayervValue();
  console.log(CommentId)
  const ClosePop = ()=>{
    handleToggle(false)
  }
   console.log(
    'task42'.length
    )
  const DeleteComment = ()=>{
      if(taskId.length === 6){
        delete toDoList[taskId.slice(4,5)-1]
        .task[taskId[5]-1]
        .comments[CommentId.slice(7 , 8) - 1]
      }
      else{
        delete toDoList[taskId.slice(4,5)-1]
        .task[0]
        .comments[CommentId.slice(7 , 8) - 1]
      }
      dispatch({
        type : 'DELETE_COMMENT' , 
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
    className="DeletePopOut" >
     <motion.div 
     initial={{
      scale : 0
     }}
     whileInView={{
      scale : 1
     }}
     transition={{delay : .25}}
     className="deletePop" >
      <h2 className="DeleteText" >
        Do you want to delete this comment ?
      </h2>
      <div className="btnHodler" >
        <motion.button 
        whileTap={{scale : .9}}
        type="submit" 
        className="CommentBtn YupBtn"
        onClick={DeleteComment}
        >
         Yup
        </motion.button>
        <motion.button
         whileTap={{scale : .9}}
         type="submit" 
         className="CommentBtn NopeBtn" 
         onClick={ClosePop}
         >
         Nope
        </motion.button>
      </div>
     </motion.div>
    </motion.div>
  );
}