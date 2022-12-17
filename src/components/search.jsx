import {motion} from 'framer-motion' ; 
import { useState } from 'react';


export const SearchBar = ({Icon , placeholder})=>{
 const [searchElements , setSearchElements] = useState([])
 return(
  <form action=""  className='format' >
    <input className='searchInput'
     type="search" placeholder={placeholder + '...'}
     onChange={(e)=>{
      e.preventDefault()
      setSearchElements(searchElements => 
        [...searchElements , e.target.value]
        )
     }} 
     />
    {
      Icon ? (<motion.div 
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
 );
}