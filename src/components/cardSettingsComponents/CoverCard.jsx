import { motion } from 'framer-motion';
import { SearchBar } from '../search';

export const CoverCard = ({images})=>{
 return(
  <motion.div 
   initial={{ y: -20 , opacity : 0}}
   whileInView={{
    y : 0  ,
    opacity : 1
   }}
    transition={{ duration : .5}} 
    className='Cover' >
     <h2 className='photoTitle' >
       Photo Search
     </h2>
     <p className='coverDetails' >
       Search Unsplash for photos
     </p>
     <form action=""  className='CoverFormat' >
    <input className='searchInput'
     type="search" placeholder='pictures...'
     />
      <motion.div 
        whileTap={{
          scale : .9 
         }}
        className='searchBtn' style={{
        display : 'flex' , 
        alignItems : 'center' , 
        justifyItems : 'center'
      }} >
      <span className='material-symbols-rounded' >
        search
      </span>
    </motion.div> 
    </form>
     <div className='imagesHolder' >
       {
         images.map(image => (
          <img   
           className='imageHolder'
           id={image?.id}
           src={image?.download_url} 
           alt="pic" 
           />
         ))
       }
     </div>
   </motion.div>
 )
}