import { motion } from "framer-motion";
import { useDataLayervValue } from "../../config/dataLayer";

export const DeletePop = ({handleToggle , CommentId , taskId})=>{
  const [{toDoList} , dispatch] = useDataLayervValue();
  console.log(CommentId)
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
          for(let i = 0 ; i < toDoList.length ; i++){
            for(let j=0 ; j < toDoList[i].task.length ; j++){
              if(toDoList[i].task[j].id === taskId){
                for(let k = 0 ; k < toDoList[i].task[j].comments.length ; k++){
                  if(toDoList[i].task[j].comments[k].id === CommentId){
                    toDoList[i].task[j].comments.splice(k , 1)
                  }
                }
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