import { motion } from 'framer-motion';
import { useEffect , useState } from 'react';
import { useDataLayervValue } from '../../config/dataLayer';

export const CoverCard = ({ taskId })=>{
  const [{toDoList} , dispatch] = useDataLayervValue();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  const [image , setNewImage] = useState(null) ;
  const imageUrl = `https://picsum.photos/v2/list?page=${Math.round(Math.random()*10)}&limit=10` ; 
  const [images , setImages] = useState([]) ;
  const fetchImages = async ()=>{
    const response = await fetch(imageUrl) ; 
    const data = await response.json() ; 
    setImages(data) ;
  }
  useEffect(()=>{
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
     <div className='imagesHolder' >
       {
         images.map(image => (
          <img   
           className='imageHolder'
           id={image?.id}
           src={image?.download_url} 
           alt="pic" 
           key={image?.id}
           onClick={()=>{
            setNewImage(image?.download_url)
           }}
           />
         ))
       }
     </div>
     <br />
     <div className='addNewTag'>
     <motion.button
       whileTap={{
        scale : .9
       }}
       type='submit'
       className='addBtn' 
       onClick={()=>{
        if(taskId.length === 6){
          toDoList[taskId.slice(4,5)-1]
         .task[taskId[5]-1]
         .image = image
       }
       else{
          toDoList[taskId.slice(4,5)-1]
         .task[0]
         .image = image
       }
        dispatch({
          type : 'SET_NEW_IMAGE' ,
          toDoList : toDoList
        })
       }}
       >
        Add
      </motion.button>
     </div>
   </motion.div>
 )
}