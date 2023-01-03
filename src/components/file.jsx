import { useState } from "react";
import { motion } from 'framer-motion'
import { BoardInfo } from "./boarddescription";
import { SearchBar } from "./search";
import { useDataLayervValue } from "../config/dataLayer";

export const File = ()=>{
 const [visibility , setVisbility] = useState({
  name : 'Private' , 
  codeIcon : 'lock'
 }) ; 
 const [toggleshow , setToggleShow] = useState(false)
 const toggleShow = (toggleState)=>{
  setToggleShow(toggleState)
 }
 const [{ accounts , users } , dispatch]  = useDataLayervValue()
 const [FileSettings , setFileSetting] = useState(false) ; 
 const [usertoAdd , setUserToAdd] = useState(false) ; 
 const handleToggle = ()=>{
  setFileSetting(!FileSettings)
 }
 const handleAddToggle = ()=>{
  setUserToAdd(!usertoAdd)
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
              users.slice(0,3).map(user => (
                <div className="imageHolder" >
                  {
                    user.photoURL ? (
                    <>
                     <img className="userImage image" 
                      src={user?.photoURL}
                      height={70} width={70}
                      alt="userImage" />
                     {
                      user?.id === users[2]?.id
                       && users?.length - 3 >= 1 
                       && (
                      <div className="dataUserOverlay" 
                       onClick={toggleShow}
                      >
                        +{users?.length - 3}
                      </div>
                      )
                     }
                    </>
                    ) : (
                    <div className="userImg" >
                       {user?.username.slice(0 , 2)}
                    </div>
                   )
                  }
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
            <SearchBar 
             Icon='search' 
             placeholder='User' 
             users={accounts} 
             />
            <div className='addNewTag' >
              <motion.button
                whileTap={{
                scale : .9
                }}
                type='submit'
                className='addBtn' >
                Invite
              </motion.button>
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
    onClick={()=>{
      setToggleShow(true)
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
   {
    toggleshow && (
      <BoardInfo
      users={users} 
      toggleShow = {toggleShow}
      />
    )
   }
  </>
 );
}