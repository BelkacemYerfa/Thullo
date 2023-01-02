import { motion } from 'framer-motion' ;
import { AddToList } from '../addToList';

export const MemberCard = ({users})=>{
 return(
  <motion.div 
    initial={{ y: -20 , opacity : 0}}
    whileInView={{
     y : 0  ,
     opacity : 1
    }}
     transition={{ duration : .5}}
    className='MembersHolder' >
     <div className='MembersDetails' >
        {
          users.map(user => (
            <div className='userHolder' >
              <img 
                className='userImage' 
                src={user.image} 
                alt="userImage"
              />
              <p className='UserCommentName' >
                {user.name}
              </p>
            </div>
          ))
        }
      </div>
      <AddToList holder='Assign a member' />
    </motion.div>
 )
}