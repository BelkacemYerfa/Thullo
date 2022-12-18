
export const UserList = ({photoURL , id , username , job})=>{
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
      job ? (<p className={job === 'admin' ? 'admin' : 'member'} >
        {job === 'admin' ? ('Admin') : ('Remove')}
       </p>) : null
    }
  </div>
 );
}