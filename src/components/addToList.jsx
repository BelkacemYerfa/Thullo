import { motion } from 'framer-motion';

export const AddToList = ({holder , handleToggle})=>{
  const OpenAddCard = ()=>{
    handleToggle(true);
  }
 return(
  <motion.div 
  onClick={OpenAddCard}
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