import { motion } from 'framer-motion';

export const AddToList = ({holder})=>{
 return(
  <motion.div 
   whileTap={{
     scale : .9
   }}
   style={{
    width : 300 
   }}
   className='addList' >
     <div className="tag" >
       <p className="addText" >
         {holder}
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