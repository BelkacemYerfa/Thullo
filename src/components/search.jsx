import {motion} from 'framer-motion' ; 
import { useState } from 'react';
import { useDataLayervValue } from '../config/dataLayer';
import { UserList } from './userListForDetails/userList';


export const SearchBar = ({Icon , placeholder , usersToAdd , need })=>{

 const [{accounts , users} , dispatch] = useDataLayervValue()
 const [searchElements , setSearchElements] = useState(usersToAdd);
 const [toggle , setToggle] = useState(false);
 const [handleData , setHandleData] = useState([]) ;
 const HandleUserData = (data)=>{
  setHandleData(handleData => [...handleData , data])
 }
 const addUserToTask = ()=>{
  for(let i=0 ; i<handleData.length ; i++){
    if(
      handleData[i]?.id
   && handleData[i]?.added === false 
   ){
     handleData[i].added = true 
    dispatch({
      type : 'ADD_NEW_USER',
      accounts : accounts , 
    })
    users.push({
      photoURL : handleData[i]?.photoURL , 
      id : `random${users.length + 1}`,
      job : 'member' , 
      username : handleData[i]?.username
    })
    dispatch ({
      type : 'ADD_NEW_USER_TO_BOARD',
      users : users
    })
   }
  }
 }

 return(
  <>
   <form action=""  className='format' >
    <input className='searchInput'
     type="search" placeholder={placeholder + '...'}
     onChange={(e)=>{
      e.preventDefault()
      usersToAdd?.forEach(user=> {
       const visibility = user?.username?.toLowerCase().includes(e.target.value);
       if(visibility){
        setSearchElements([user])
       } 
      })
      if(e.target.value === '' || null || e.target.value.includes(' ') ){
        setSearchElements(usersToAdd) 
      }
     }} 
     />
    {
      Icon ? (<motion.div 
        onClick={()=>{
          setToggle(true)
        }}
        whileTap={{
          scale : .9 
         }}
        className='searchBtn' style={{
        display : 'flex' , 
        alignItems : 'center' , 
        justifyItems : 'center'
      }} >
      <span className='material-symbols-rounded' >
        {Icon}
      </span>
    </motion.div>) : (
      <motion.input
      whileTap={{
       scale : .9 
      }}
      className='searchBtn' type="submit" value="search" />
    )
         
    }
    </form>
    {
      usersToAdd ? (
        <div className="userList" >
         {
          searchElements.map(user => (
            <UserList 
              handleUserDat={HandleUserData}
              users={usersToAdd}
              addedUser={user?.added}
              id={user?.id} 
              photoURL={user?.photoURL} 
              username={user?.username} 
              key={user?.id}
            />
          ))
         }
        </div>
      ) : null
    }
    {
       need === true ? (
        <div className='addNewTag' 
         onClick={addUserToTask}
        >
          <motion.button
            whileTap={{
            scale : .9
            }}
            type='submit'
            className='addBtn' >
            Invite
          </motion.button>
        </div>
       ) : null 
    }
  </>
 );
}