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
        users.slice(0,3).map(user => (
          <div className="imageHolder" >
            {
              user.image ? (
              <>
               <img className="userImage image" 
                src={user?.image}
                height={70} width={70}
                alt="userImage" />
               {
                user?.id === users[2]?.id
                 && users?.length - 3 >= 1 
                 && (
                <div className="dataUserOverlay">
                  +{users?.length - 3}
                </div>
                )
               }
              </>
              ) : (
              <div className="userImg" >
                 {user?.name.slice(0 , 2)}
              </div>
             )
            }
          </div>
        ))
      }
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
        tags={tags}
        users={users}
        comments={comments}
      />
    )
   }
  </>
 );
}