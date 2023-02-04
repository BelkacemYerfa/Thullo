import { motion } from 'framer-motion'
import { useDataLayervValue  } from '../../config/dataLayer';

export const UserList = ({photoURL , id , username , job , addedUser })=>{
  const [{ accounts , users } , dispatch]  = useDataLayervValue()
  const addUserToTask = ()=>{
   if(
      accounts[id.slice(6,7) - 1]?.id === id 
   && accounts[id.slice(6,7) - 1]?.added === false 
   ){
    accounts[id.slice(6,7) - 1].added = true 
    dispatch({
      type : 'ADD_NEW_USER',
      accounts : accounts , 
    })
    users.push({
      photoURL : photoURL , 
      id : `random${users.length + 1}`,
      job : 'member' , 
      username : username
    })
    dispatch ({
      type : 'ADD_NEW_USER_TO_BOARD',
      users : users
    })
   }else{
    alert('user already added')
   }
  }
 return(
  <>
   {
    !accounts[id.slice(6,7) - 1]?.added  ? (
      <div className="user" id={id} 
      onClick={addUserToTask}
      >
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
          accounts[id.slice(6,7) - 1]?.id === id && accounts[id.slice(6,7) - 1]?.added ? (
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
          className={job === 'admin' ? 'admin' : 'member'} >
            {job === 'admin' ? ('Admin') : ('Remove')}
          </motion.p>) : null
        }
      </div>
    ) : null
   }
  </>
 );
}