import { motion } from 'framer-motion' ; 

export const UserSettings = ()=>{
 return(
  <motion.div 
   initial ={{
    opacity : 0 , 
    y : 20
   }}
   whileInView={{
    opacity : 1 , 
    y : 0 , 
   }}
   transition ={{
    duration : .3
   }}
   className='userDrop' >
    <motion.a 
     className='account githubAccount'
     target='_blank'
     href="https://github.com/BelkacemYerfa"
     whileTap={{
      scale : .9
     }}
     >
     <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{
      height : 24 , width : 24
     }} alt="" />
     <p>
      Github
     </p>
    </motion.a>
    <motion.div
    whileTap={{
     scale : .9
    }}
    className='account LogOut' >
     <span class="material-symbols-rounded">
     logout
     </span>
     <p>
      Log Out
     </p>
    </motion.div>
   </motion.div>
 )
}