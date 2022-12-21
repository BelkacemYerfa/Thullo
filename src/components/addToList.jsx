import { motion } from 'framer-motion';

export const AddToList = ()=>{
 return(
  <motion.div 
   whileTap={{
     scale : .9
   }}
   className='taskcolumn addList ' >
     <div className="tag" >
       <p className="addText" >
         Add another List
       </p>
       <motion.div 
       whileTap={{
         scale : .9
       }}
       transition = {{
         duration : .1
       }}
       className="spred" >
       <span className="material-symbols-rounded">
         add
       </span>
       </motion.div>
     </div>
   </motion.div>
 );
}