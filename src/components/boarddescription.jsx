import { useState } from "react";
import { UserList } from "./userListForDetails/userDataList";
import { motion } from 'framer-motion'
import { useDataLayervValue } from "../config/dataLayer";

export const BoardInfo = ({users , toggleShow})=>{
  const [{boardDescription} , dispatch] = useDataLayervValue()
  const [toggle , setToggle] = useState(false) ; 
  const [DescriptionData , setCardDescription] = useState(true) ; 
  const [NewBoardDescription , setNewBoardDescription] = useState(boardDescription)
  const handleCardDescription = ()=>{
    setCardDescription(!DescriptionData);
  }

  return(
  <motion.div 
   initial={{
    opacity : 0 , 
    x : 70 , 
  }}
  whileInView={{
    opacity : 1 , 
    x : 0
  }} 
  transition={{
    duration : .5 , 
    
  }}
  className="board" >
    <div className="Title" >
     <h3>
       Menu
     </h3>
     <div className="closebtn" 
      onClick={()=>{
        toggleShow(setToggle(!toggle))
      }}
     >
      <span className="material-symbols-rounded">
       close
      </span>
     </div>
    </div>
    <hr />
    <div className="creator" >
      <div className="userCreator" >
       <span className="material-symbols-rounded">
        account_circle
       </span>
       Made By
      </div>
      <div className="User" >
        <img className="userImage" src="https://avatarfiles.alphacoders.com/127/thumb-127272.jpg" alt="" />
        <div className="userCreatorInfo" >
          <h2 className="userCreatorName" >
            Kratos
          </h2>
          <p className="userCreationDate" >
           on 4 july , 2022
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className="tableDescription" > 
      <div className="desciptionDetails" >
        <div className="userCreator" >
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
        boardDescription && DescriptionData ? (
          <div className='Description' id='description' >
            { boardDescription }
          </div>
        ) : (
        <>
         <div className="Description" >
            <textarea 
            className="textarea" 
            name="" 
            placeholder="Description..." 
            id="textraea" 
            rows={10} 
            onChange={(e)=>{
                if(e.target.value !== '' || null || undefined ){
                  setNewBoardDescription(e.target.value)
                }
            }}

            >
              { boardDescription }
            </textarea>
          </div>
          <br />
          <div className="desciptionBtns" >
            <motion.div 
            whileTap={{scale : .9}}
            className="btn Btn1"
            onClick={()=>{
              dispatch({
                type : 'SET_NEW_BOARD_DESCRIPTION',
                boardDescription : NewBoardDescription
              })
              handleCardDescription()
            }}
            >
              Save
            </motion.div>
            <div 
             onClick={handleCardDescription}
            className="btn Btn2">
              Cancel
            </div>
          </div>
        </>
        )
        }
    </div>
    <br />
    <div className="usersAcces" >
       <div className="userCreator" >
        <span className="material-symbols-rounded">
          group
        </span>
        Team
       </div>
       <div className="tabelUsers" >
         {
          users?.map(user => (
            <UserList 
              username={user?.username} 
              photoURL={user?.photoURL} 
              job={user?.job} 
              id={user?.id}
              addedUser={null}
            />
          ))
         }
       </div>
    </div>
  </motion.div>
 );
}