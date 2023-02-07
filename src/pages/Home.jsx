import { NavBar } from "../components/navbar"
import { motion } from "framer-motion"

export const Boards = ()=>{
 const BoardArray = [
  {
   id : 1 ,
   photoURL : 'https://thumbs.dreamstime.com/b/ocean-wave-14582420.jpg' ,
   title : 'Devchallenges Board'  ,
   users : [
    {
     id : 'user'+Math.floor(Math.random()*1000) ,
     photoURL : 'https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg'
    }
   ]
  }
 ]
 return (
  <div className="BoardListHome" >
   <NavBar />
   <div className="BoardsHolder" >
    <div className="BoardFunctionality" >
     <div className="addBoards" >
      <p>
       All Boards
      </p>
      <motion.div
      whileTap={{
       scale : .9
      }}
     className='BtnAdd' >
      <span class="material-symbols-rounded">
       add
      </span>
       Add
     </motion.div>
     </div>
     <br/>
     <div className='BoardToSelect'  >
      {
       BoardArray.map( board => (
        <div className="Board" >
         <img src={board?.photoURL} className='BoardImage' alt="boardImage" />
         <p className="BoardTitle" >
          {board?.title}
         </p>
         <div className="users" >
          {
           board?.users.map( user => (
            <img src={user?.photoURL} className='userImage' alt="userImage" />
           ))
          }
         </div>
        </div>
       ))
      }
     </div>
    </div>
   </div>
  </div>
 )
}