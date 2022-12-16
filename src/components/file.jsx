import { useState } from "react";
import { motion } from 'framer-motion'

export const File = ()=>{
 const [visibility , setVsibility] = useState('Private') ; 
 return(
  <div className="file" >
   <div className="" >
   <motion.div
       whileTap={{
        scale : .9 
       }}
      className='boardSelection' >
        <span class="material-symbols-rounded">
         lock
        </span>
        <span>
        {visibility}
        </span>
      </motion.div>
   </div>
  </div>
 );
}