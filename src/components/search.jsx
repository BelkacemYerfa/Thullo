import {motion} from 'framer-motion' ; 
import { useState } from 'react';
import { UserList } from './userList';


export const SearchBar = ({Icon , placeholder , users })=>{
 const [searchElements , setSearchElements] = useState(users);
 const [toggle , setToggle] = useState(false)
 return(
  <>
   <form action=""  className='format' >
    <input className='searchInput'
     type="search" placeholder={placeholder + '...'}
     onChange={(e)=>{
      e.preventDefault()
      users?.forEach(user=> {
       const visibility = user?.username?.toLowerCase().includes(e.target.value);
       if(visibility){
        setSearchElements([user])
       } 
      })
      if(e.target.value === '' || null || e.target.value.includes(' ') ){
        setSearchElements(users) 
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
      users ? (
        <div className="userList" >
         {
          searchElements.map(user => (
            <UserList 
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
  </>
 );
}