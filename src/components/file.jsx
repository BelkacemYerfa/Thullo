import { useState } from "react";
import { motion } from 'framer-motion'
import { SearchBar } from "./search";
import { UserList } from "./userList";

export const File = ()=>{
 const [visibility , setVisbility] = useState({
  name : 'Private' , 
  codeIcon : 'lock'
 }) ; 
 const [users , setUsers] = useState([
  {
    photoURL : null , 
    id : 'random' , 
    username :'Belkacem'
  } , 
  {
    photoURL : null , 
    id : 'random2' , 
    username :'Aktham'
  }
 ])
 const [FileSettings , setFileSetting] = useState(false) ; 
 const [usertoAdd , setUserToAdd] = useState(false)
 /*
  others account will be an object contain :
  username && profilePic.
 */
 const [accounts , setAccounts] = useState([
  {
    name : 'Kratos' , 
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
  } , 
  {
    name : 'Kratos' , 
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
  } , 
  {
    name : 'Kratos' , 
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
  }
 ]) ; 
 const handleToggle = ()=>{
  setFileSetting(!FileSettings)
  setTimeout(()=>{
    document.getElementById('reference').style.display='none'
  }, 10000)
 }
 const handleAddToggle = ()=>{
  setUserToAdd(!usertoAdd)
  if(usertoAdd === true){
    setTimeout(()=>{
      document.getElementById('adduser').style.display='none'
    }, 10000)
  }
 }
 return(
  <>
   <div className="file" >
   <div className="fileSettings" >
      <motion.div
       whileTap={{
        scale : .9 
       }}
       onClick = {handleToggle}
       className='boardSelection' >
        <span class="material-symbols-rounded">
         {visibility.codeIcon}
        </span>
        <span>
        {visibility.name}
        </span>
      </motion.div>
      <div className="usersTable" >
        <div className="usersConatiner" >
            {
              accounts.map(user => (
                <div className="imageHolder" >
                  <img className="userImage image" 
                  src={user?.photoURL}
                   height={70} width={70}
                  alt="userImage" />
                </div>
              ))
            }
        </div>
        <motion.div 
         whileTap={{
          scale : .9
         }}
         className="addUsersBtn" 
          onClick={handleAddToggle}
         >
          <span class="material-symbols-rounded">
            add
          </span>
        </motion.div>
         {
          usertoAdd && (
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
              className="addUsers" id="adduser" >
            <h2 className="tableTitle weight" >
               Invite to board
            </h2>
            <p className="selection adjust-description" >
               Search users you want to invite to
            </p>
            <SearchBar Icon='search' placeholder='User' />
            <div className="userList" >
              {
               users.map(user => (
                 <UserList id={user?.id} 
                 photoURL={user?.photoURL} 
                 username={user?.username} 
                 key={user?.id}
                 />
               ))
              }
            </div>
         </motion.div>
          )
         }
      </div>
   </div>
   <motion.div
    whileTap={{
      scale : .9
    }}
   className="boardSelection" >
    <span class="material-symbols-rounded">
      more_horiz
    </span>
    Show Menu
   </motion.div>
  </div>
   {
    FileSettings && (
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
      className="visibility"
      id='reference'
      >
         <h2 className="tableTitle" >
           Visibility
         </h2>
         <p className="selection adjust-description " >
          Choose who can see to this board.
         </p>
         <div className="settings" >
          <div className="choser" onClick={()=>{
            setVisbility({name : 'Public' , codeIcon : 'public'})
            setFileSetting(false)
          }} >
            <div className="settings tableTitle " >
              <span class="material-symbols-rounded">
               public
              </span>
               Public
            </div>
            <p className="adjust-description" >
             Anyone on the community can see this.
            </p>
           </div>
           <div className="choser" onClick={()=>{
            setVisbility({name : 'Private' , codeIcon : 'lock'})
            setFileSetting(false)
          }}  >
             <div className="settings tableTitle" >
              <span class="material-symbols-rounded">
                lock
              </span>
              Private
             </div>
             <p className="adjust-description" >
              Only board members can see this
             </p>
           </div>
         </div>
      </motion.div>
    )
   }
  </>
 );
}