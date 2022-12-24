import { motion } from 'framer-motion' ; 

export const CardDataDescription = ({image , handleToggle})=>{
  const CloseData = ()=>{
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
  className='CardHolder' >
    <div className="CardDataDescription" >
       <div className="CloseBtn" 
        onClick={CloseData}
       >
        <span class="material-symbols-rounded">
         close
        </span>
       </div>
       {
        image ? (
        <>
         <img 
          className="cardImage" 
          src={image} 
          height={200} 
          alt="Card pic" 
          />
          <br />
        </>
        ) : null
       }
       <div className="Details" >
        <div className="Content" >
          data
        </div>
        <div className="Settings" >
          data
        </div>
       </div>
    </div>
  </motion.div>
 );
}