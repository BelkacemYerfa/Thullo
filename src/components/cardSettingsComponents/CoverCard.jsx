import { motion } from 'framer-motion';
import { useEffect , useState } from 'react';
export const CoverCard = ()=>{
  const imageUrl = `https://picsum.photos/v2/list?page=${Math.round(Math.random()*10)}&limit=20` ; 
  const [images , setImages] = useState([]) ;
  useEffect(()=>{
    const fetchImages = async ()=>{
      const response = await fetch(imageUrl) ; 
      const data = await response.json() ; 
      setImages(data) ; 
      console.log(images)
    }
    fetchImages() ; 
  } , [])
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