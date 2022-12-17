
export const UserList = ({photoURL , id , username})=>{
 return(
  <div className="userToAdd" id={id} >
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
 );
}