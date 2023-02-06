import { motion } from 'framer-motion'
import { useDataLayervValue  } from '../../config/dataLayer';

export const UserList = ({photoURL , id , username , job , addedUser })=>{
 const [{ accounts , users , user } , dispatch]  = useDataLayervValue();
 console.log(id)
 return(
   <div className="user" id={id} >
     <div className="userToAdd" >
     {
     photoURL ? (<img className="userImg" src={photoURL} alt="user pic" />) : (
       <div className="userImg" >
         {
         username?.slice(0 , 2)
         }
       </div>
     )
     }
     <p className="username" >
     {username}
     </p>
     </div>
     {
       addedUser !== null || undefined ? 
       users[id.slice(6,7) - 1]?.id === id && users[id.slice(6,7) - 1]?.added ? (
           <div className='addUserToTask check' >
             <span class="material-symbols-rounded">
             how_to_reg
             </span>
           </div>
         ) : (
         <div className='addUserToTask notCheck' >
             <span class="material-symbols-rounded">
               person_add
             </span>
         </div>
       )
       : null
     }
     {
       job ? 
       (<motion.p 
       whileTap={{
         scale : .9
       }}
       className={job === 'admin' ? 'admin' : 'member'}
       style={{
         border : job === 'member' && user?.job==='admin' ? '1px solid #EB5757' : 'none' ,
         padding : job === 'member' && user?.job==='admin' ? '4.5px 11.5px' : '0px 0px'
       }}
       onClick={()=>{
         if(job === 'member' && user?.job === 'admin'){
          for(let i=0 ; i<users.length ; i++){
            if(users[i].id === id){
              accounts.push({
                photoURL : users[i]?.photoURL , 
                job : users[i]?.job , 
                id : `${crypto.randomUUID()}` , 
                username : users[i]?.username,
                added : false , 
                addNow : false
              })
              users.splice(i , 1);
            }
          }
            dispatch({
              type : 'REMOVE_USER_FROM_BOARD',
              users : users , 
              accounts : accounts
            })
         }
       }} >
         {
          job === 'admin' ? ('Admin') : user?.job === 'admin' ? ('Remove') : null
         }
       </motion.p>) : null
     }
   </div> 
 );
}