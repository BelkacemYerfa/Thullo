import { motion } from "framer-motion";

export const DeletePop = ({handleToggle , CommentId})=>{
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
        onClick={ClosePop}
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