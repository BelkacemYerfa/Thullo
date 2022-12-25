import { motion } from 'framer-motion' ; 
import { useState } from 'react';

export const CardDataDescription = ({image , description , tag , title , handleToggle})=>{
  const CloseData = ()=>{
    handleToggle(false)
  }
  const [DescriptionData , setCardDescription] = useState(false) ; 
  const handleCardDescription = ()=>{
    setCardDescription(!DescriptionData);
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
       <motion.div
        whileTap={{
          scale : .9
        }}
       className="CloseBtn" 
        onClick={CloseData}
       >
        <span class="material-symbols-rounded">
         close
        </span>
       </motion.div>
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
          <div className='titleHolder' >
            <h2 className='CardDestailTitle' >
              {title}
            </h2>
            <p className='CardList' >
              in list <span className='listId' >{tag}</span>
            </p>
          </div>
          <br />
          <div className='desciptionDetails' >
            <div className="userCreator sectionTitle" >
              <span className="material-symbols-rounded">
                description
              </span>
              Description
            </div>
            <motion.div
             whileTap={{
              scale : .9
             }}
            className='editFile'
             onClick={handleCardDescription}
            >
              <span class="material-symbols-rounded">
                edit
              </span>
              Edit
            </motion.div>
          </div>
          <br />
          {
            DescriptionData === true ? (
              <div className='Description' id='description' >
                {description}
              </div>
            ) : (
              <>
               <textarea 
                className="textarea" name="" 
                placeholder="Description..."
                id="textarea" rows={10} >
                  {
                    description
                  }
               </textarea>
               <div className="desciptionBtns" >
                  <motion.div 
                  whileTap={{scale : .9}}
                  className="btn Btn1">
                    Save
                  </motion.div>
                  <div className="btn Btn2">
                    Cancel
                  </div>
               </div>
              </>
            )
          }
        </div>
        <div className="Settings" >
          data
        </div>
       </div>
    </div>
  </motion.div>
 );
}