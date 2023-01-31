import { motion } from "framer-motion";
import { useDataLayervValue } from "../../config/dataLayer";

export const DeletePop = ({handleToggle , CommentId , taskId})=>{
  const [{toDoList} , dispatch] = useDataLayervValue();
  console.log(CommentId)
  const ClosePop = ()=>{
    handleToggle(false)
  }
   console.log(
    'comment2'.slice(7 , 8)
    )
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
        onClick={()=>{
          if(taskId.length === 6){
             for(let i=0 ; i<toDoList[taskId.slice(4,5)-1].task[taskId[5]-1].comments.length ; i++){
              if(toDoList[taskId.slice(4,5)-1].task[taskId[5]-1].comments[i].id === CommentId){
                toDoList[taskId.slice(4,5)-1].task[taskId[5]-1].comments.splice(i , 1)
              }
             }
          }
          else{
            for(let i=0 ; i<toDoList[taskId.slice(4,5)-1].task[0].comments.length ; i++){
              if(toDoList[taskId.slice(4,5)-1].task[0].comments[i].id === CommentId){
                toDoList[taskId.slice(4,5)-1].task[0].comments.splice(i , 1)
              }
             }
          }
          dispatch({
            type : 'DELETE_COMMENT' , 
            toDoList : toDoList
          })
        ClosePop()
        }}
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