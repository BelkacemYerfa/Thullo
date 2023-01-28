import { motion } from 'framer-motion' ; 
import { useState , useEffect } from 'react';

export const LabelCard = ({ tags })=>{
  const Colors = [
    '#219653' , '#F2C94C' , '#F2994A' , '#EB5757' ,
    '#2F80ED' , '#56CCF2' , '#6FCF97' , '#333333' , 
    '#4F4F4F' , '#828282' , '#BDBDBD' , '#E0E0E0' ,
  ]
  const [tagName , setTagName] = useState(null) ;
  const [tagBg , setTagBg] = useState(null) ;
 return(
  <motion.div 
   initial={{ y: -20 , opacity : 0}}
   whileInView={{
    y : 0  ,
    opacity : 1
   }}
    transition={{ duration : .5}}
  className='Cover Labels' >
    <h2 className='photoTitle' >
     Label
    </h2>
    <p className='coverDetails' >
     Select a name and a color
    </p>
    <form action="" className='CardFormat' >
      <input className='searchInput' type="text" placeholder='Label' 
       onChange={(e)=>{
        setTagName(e.target.value)
       }}
      />
    </form>
    <div className='TagBgHolder' >
      {
        Colors.map(color => (
          <motion.div 
          whileTap={{scale : .9}}
          id={color}
          style={{backgroundColor : color}}
          className='TagColor' 
          onClick={()=>{
            setTagBg(color)
          }}
          >
          </motion.div>
        ))
      }
    </div>
    <div className='MainLabel' >
        <h3 className='LabelsTitle' >
          <span class="material-symbols-rounded">
           label
          </span>
          Available 
        </h3>
        <div className="tags" >
          {
            tags?.map(tag => (
            <div className="tagNameTable" style={{
              color : tag.bg , 
              backgroundColor : tag.fontColor
            }} >
              {
                tag.tagName
              }
            </div>
            ))
          }
        </div>
    </div>
    <div className='addNewTag' >
      <motion.button
       whileTap={{
        scale : .9
       }}
       type='submit'
       className='addBtn' >
        Add
      </motion.button>
    </div>
  </motion.div>
 )
}
