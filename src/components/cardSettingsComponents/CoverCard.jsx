import { motion } from 'framer-motion';
import { useEffect , useState } from 'react';
import { useDataLayervValue } from '../../config/dataLayer';
import { Loading } from '@nextui-org/react';

export const CoverCard = ({ taskId , listId , handleImage , need })=>{
  const [{toDoList} , dispatch] = useDataLayervValue();
  const [image , setNewImage] = useState(null) ;
  const [loader , setLoader] = useState(true) ; 
  const imageUrl = `https://picsum.photos/v2/list?page=${Math.round(Math.random()*10)}&limit=10` ; 
  const [images , setImages] = useState([]) ;
  const fetchImages = async ()=>{
    const response = await fetch(imageUrl) ; 
    const data = await response.json() ; 
    setLoader(false) ;
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
     {
      loader ? (<div className='loader' >
        <Loading />
      </div>) : (<div className='imagesHolder' >
       {
         images.map(image => (
          <motion.img  
           whileTap={{scale : .9}} 
           className='imageHolder imageHolder2'
           id={image?.id}
           src={image?.download_url} 
           alt="pic" 
           key={image?.id}
           onClick={()=>{
            setNewImage(image?.download_url);
           }}
           />
         ))
       }
     </div>)
     }
     <br />
     <div className='addNewTag'>
     <motion.button
       whileTap={{
        scale : .9
       }}
       type='submit'
       className='addBtn' 
       onClick={()=>{
        if(image !== null || undefined ) {
          if((listId !== null || undefined ) && need===true  ){
            handleImage(image)
          }
          for(let i=0 ; i<toDoList.length ; i++){
            for(let j=0 ; j<toDoList[i].task.length ; j++){
              if(toDoList[i].task[j].id === taskId){
                toDoList[i].task[j].image = image ;
              }
            }
          }
          dispatch({
            type : 'SET_NEW_IMAGE' ,
            toDoList : toDoList
          })
        }
       }}
       >
        Add
      </motion.button>
     </div>
   </motion.div>
 )
}