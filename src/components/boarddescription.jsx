import { useState } from "react";
import { UserList } from "./userList";


export const BoardInfo = ({users , toggleShow})=>{
  const [toggle , setToggle] = useState(false) ; 
 return(
  <div className="board" >
    <div className="Title" >
     <h3>
       Menu
     </h3>
     <div className="closebtn" 
      onClick={()=>{
        toggleShow(setToggle(!toggle))
      }}
     >
      <span class="material-symbols-rounded">
       close
      </span>
     </div>
    </div>
    <hr />
    <div className="creator" >
      <div className="userCreator" >
       <span class="material-symbols-rounded">
        account_circle
       </span>
       Made By
      </div>
      <div className="User" >
        <img className="userImage" src="https://avatarfiles.alphacoders.com/127/thumb-127272.jpg" alt="" />
        <div className="userCreatorInfo" >
          <h2 className="userCreatorName" >
            Kratos
          </h2>
          <p className="userCreationDate" >
           on 4 july , 2022
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className="tableDescription" > 
      <div className="userCreator" >
       <span class="material-symbols-rounded">
        description
       </span>
       Description
      </div>
      <div className="Description" >
        <textarea className="textarea" name="" placeholder="Description..." id="textraea" rows={10} ></textarea>
      </div>
      <div className="desciptionBtns" >
        <div className="btn Btn1">
          Save
        </div>
        <div className="btn Btn2">
          Cancel
        </div>
      </div>
    </div>
    <br />
    <div className="usersAcces" >
       <div className="userCreator" >
        <span class="material-symbols-rounded">
          group
        </span>
        Team
       </div>
       <div className="tabelUsers" >
         {
          users?.map(user => (
            <UserList username={user?.username} 
            photoURL={user?.photoURL} job={user?.job} 
            id={user?.id}
            />
          ))
         }
       </div>
    </div>
  </div>
 );
}