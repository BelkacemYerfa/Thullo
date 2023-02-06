import { motion } from 'framer-motion' ;
import { useDataLayervValue } from '../../config/dataLayer';
import { SearchBar } from '../search';
import { useState } from 'react';

export const MemberCard = ()=>{
  const [{users , accounts}] = useDataLayervValue();
  const [CardMembers  ,setCardMembers] = useState(false)
  const CardMembersSet = ()=>{
    setCardMembers(!CardMembers)
  }
 return(
  <>
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
      <motion.div 
      onClick={CardMembersSet}
      whileTap={{
        scale : .9
      }}
      style={{
        width : 300 
      }}
      className='addList' >
        <div className="tag" >
          <p className="addText" >
            Assign a member
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
    </motion.div>
    {
      CardMembers && (
        <>
         <motion.div 
            initial ={{
              y : 10 , 
              opacity : 0, 
            }} 
            whileInView={{
            y : 0 , 
            opacity : 1
            }}
            transition={{
            duration : .3
            }}
            style={{
              zIndex : 100
            }}
            className="addUsersToBoard" id="adduser" >
            <h2 className="tableTitle weight" >
                Invite to board
            </h2>
            <p className="selection adjust-description" >
                Search users you want to invite to
            </p>
            <SearchBar 
              Icon='search' 
              placeholder='User' 
              usersToAdd={accounts}
              need = {true}
              />
          </motion.div>
          <br />
          <br />
        </>
      )
    }
  </>
 )
}