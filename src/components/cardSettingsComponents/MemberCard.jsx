import { motion } from 'framer-motion' ;
import { AddToList } from '../addToList';
import { useDataLayervValue } from '../../config/dataLayer';

export const MemberCard = ()=>{
  const [{users}] = useDataLayervValue()
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
              {
                user.photoURL ? (
                  <img 
                    className='userImage' 
                    src={user.photoURL} 
                    alt="userImage"
                  />
                ) : (
                  <div className="userImg" >
                     {user?.username.slice(0 , 2)}
                  </div>
                 )
              }
              <p className='UserCommentName' >
                {user.username}
              </p>
            </div>
          ))
        }
      </div>
      <AddToList holder='Assign a member' />
    </motion.div>
 )
}