import { motion } from 'framer-motion';
import { useState } from 'react';
import { CardDataDescription } from './CardDescription';

export const TaskCard = ({image , tag , description , title , tags, users , comments})=>{
 const [CardDescription , setCardDescription] = useState(false) ; 
 const handleCardDescription = ()=>{
  setCardDescription(!CardDescription)
 }
 const handleToggle = (toggle)=>{
  setCardDescription(toggle)
 }
 return(
  <>
    <div 
    className="taskCard"
    onClick={handleCardDescription}
    >
      {
        image !== null || undefined || '' ?
        (<img className='taskImage' src={image} alt='pic' />)
        : null
      }       
      {
        title !== null || undefined ?
        (<h2 className='taskTitle' >{title}</h2>)
        : null
      } 
      <div className="tags" >
      {
        tags?.map(tag => (
        <div className="tagNameTable" style={{
          color : tag.bg , 
          backgroundColor : tag.fontColor
        }} >
          {
            tag.tagName
          }
        </div>
        ))
      }
    </div>
    <div className="users">
      <div className='usersHolder' >
      {
        users?.map(user=>( 
          <div className="imageHolder" >
            {
            user?.image !== null || undefined || '' ?
            (
              <img 
              className="userImage image" 
              src={user?.image}
              height={70} width={70}
              alt="userImage" 
              />
            ) 
            : null
            }
          </div>
        ))
      }
      <motion.div
        whileTap={{
          scale : .9
        }}
        className="addUsersBtn" >
        <span class="material-symbols-rounded">
          add
        </span>
      </motion.div>
      </div>
        {
          comments.length !== 0 ? (
            <div className='comments'>
              <span class="material-symbols-rounded">
              comment
              </span>
              <p>
              {comments.length}
              </p>
            </div>
          ) : null
        }
    </div>
   </div>
   {
    CardDescription && (
      <CardDataDescription 
        image={image} 
        title={title} 
        handleToggle={handleToggle} 
        tag={tag}
        description={description}
        tagss={tags}
        users={users}
        comments={comments}
      />
    )
   }
  </>
 );
}