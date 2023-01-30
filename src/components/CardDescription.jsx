import { motion } from 'framer-motion' ; 
import { useEffect, useState } from 'react';
import { useDataLayervValue } from '../config/dataLayer';
import { CoverCard } from './cardSettingsComponents/CoverCard';
import { LabelCard } from './cardSettingsComponents/LabelCard';
import { MemberCard } from './cardSettingsComponents/MemberCard';
import { DeletePop } from './commentsSettings/deletePop';
import { NonComments } from './commentsSettings/nonComments';

export const CardDataDescription = ({ tags , users , image , comments , description , tag , title , handleToggle , id })=>{
  const CloseData = ()=>{
    handleToggle(false)
  }
  let [commentsData , setCommentsData] = useState(null) ;
  useEffect(()=>{
   if(comments.length !== 0){
    setCommentsData(comments)
   }
   else{
    setCommentsData(null)
   }
  },[comments])
  const [DescriptionData , setCardDescription] = useState(true) ; 
  const [Members , setMembers] = useState(false);
  const [Labels , setLabels] = useState(false);
  const [Cover , setCover] = useState(false);
  const [Delete , setDelete] = useState(false);
  const handleCommentDelete =()=>{
    setDelete(!Delete);
  }
  const handleCardDescription = ()=>{
    setCardDescription(!DescriptionData);
  }
  const handleCommentToggle = (toggle)=>{
    console.log(toggle)
    setDelete(toggle);
  }
  const handleUsers = ()=>{
    setMembers(!Members)
    setCover(false) ; 
    setLabels(false) ; 
    console.log(Members)
  }
  const handleLabels = ()=>{
    setLabels(!Labels) ; 
    setMembers(false) ; 
    setCover(false) ; 
    console.log(Labels) ; 
  }
  const handleCover = ()=>{
    setCover(!Cover);
    setMembers(false) ; 
    setLabels(false) ; 
    console.log(Cover)
  }
  const handleCardToggle = (id)=>{
    switch(id){
      case 1 : return handleUsers
      case 2 : return handleCover
      case 3 :return handleLabels
      default : return [setCover(false) , setLabels(false) , setMembers(false)]
    }
  }
  /*
    we need to have some arg :
      users , tags , image.
  */
  const CardSettings = [
    {
      icon : 'group'  ,
      name : 'members' , 
      id : 1 ,
    },
    {
      icon : 'image'  ,
      name : 'cover' , 
      id : 2 ,
    },
    {
      icon : 'label'  ,
      name : 'labels' , 
      id : 3 ,
    }
  ]
 return(
   <motion.div
   initial={{
    y : '100vh' , 
    opacity : 0
   }}
   whileInView={{
    y : 0 , 
    opacity : 1
   }}
    className='CardHolder' >
      <div className="CardDataDescription" >
        <motion.div
          whileTap={{
            scale : .9
          }}
        className="CloseBtn" 
          onClick={CloseData}
        >
          <span class="material-symbols-rounded">
          close
          </span>
        </motion.div>
        {
          image ? (
          <>
          <img 
            className="cardImage" 
            src={image} 
            height={200} 
            alt="Card pic" 
            />
            <br />
          </>
          ) : null
        }
        <div className="Details" >
          <div className="Content" >
            <div className='titleHolder' >
              <h2 className='CardDestailTitle' >
                {title}
              </h2>
              <p className='CardList' >
                in list <span className='listId' >{tag}</span>
              </p>
            </div>
            <br />
            <div className='desciptionDetails' >
              <div className="userCreator sectionTitle" >
                <span className="material-symbols-rounded">
                  description
                </span>
                Description
              </div>
              <motion.div
              whileTap={{
                scale : .9
              }}
              className='editFile'
              onClick={handleCardDescription}
              >
                <span class="material-symbols-rounded">
                  edit
                </span>
                Edit
              </motion.div>
            </div>
            <br />
            {
              DescriptionData === true ? (
                <div className='Description' id='description' >
                  {description}
                </div>
              ) : (
                <>
                <textarea 
                  className="textarea" name="" 
                  placeholder="Description..."
                  id="textarea" rows={7} >
                    {
                      description
                    }
                </textarea>
                <div className="desciptionBtns" >
                    <motion.div 
                    whileTap={{scale : .9}}
                    className="btn Btn1">
                      Save
                    </motion.div>
                    <div className="btn Btn2"
                    onClick={handleCardDescription}
                    >
                      Cancel
                    </div>
                </div>
                </>
              )
            }
            <br />
            <div className='commentUser' >
              <div className='Comments' >
                <img 
                className='userImage'
                src='https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' 
                alt="user pic" />
                <div className='comment' >
                  <textarea 
                    className="textarea commentData" name="" 
                    placeholder="Write a comment..."
                    id="textarea" rows={3}
                  ></textarea>
                </div>
              </div>
              <div className='CommentBtnHolder' >
                <motion.div 
                whileTap={{
                  scale : .9
                }}
                className='commentBtn' >
                  Comment
                </motion.div>
              </div>
            </div>
            <br />
            <div className='commentsHolder' >
                {
                  commentsData !== null || undefined ?  
                  commentsData.map(comment => (
                    <>
                    <div className='commentOfUser' >
                      <div className='headComment' >
                        <div className='commentLeftSide' >
                          <img className='userImage' src={comment?.image} alt="" />
                          <div className='UserInfo' >
                            <p className='UserCommentName' >
                              {comment?.username}
                            </p>
                            <p className='CreationDate' >
                              {comment?.createDate}
                            </p>
                          </div>
                        </div>
                        <motion.div
                        whileTap={{
                          scale : .9
                        }}
                        className='BtnSettings'
                        onClick={handleCommentDelete}
                        >
                          <span className="material-symbols-rounded">
                            delete 
                          </span>
                          delete
                        </motion.div>
                      </div>
                      <br />
                      <div className='CommentData' >
                          {comment?.comment}
                      </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                      {
                        Delete && (
                          <DeletePop 
                            handleToggle={handleCommentToggle} 
                            CommentId={comment?.id} 
                            taskId={id}
                          />
                        )
                      }
                    </>
                  )) : (
                    <NonComments />
                  )
                }
            </div>
          </div>
          <div className="Settings" >
            <div className='userCreator' >
              <span class="material-symbols-rounded">
                account_circle
              </span>
              Actions
            </div>
            <div className='Cardactions' >
              {
                CardSettings.map(action => (
                  <>
                  <motion.div
                    whileTap={{
                      scale : .9
                    }}
                    id={action.id}
                    onClick={handleCardToggle(action.id)}
                    className='actionData' >
                      <span class="material-symbols-rounded">
                      {action.icon}
                      </span>
                      {action.name}
                    </motion.div>
                    {
                      Members && action.id === 1 && (
                        <MemberCard users={users} />
                      )
                    }
                    {
                      Cover && action.id === 2 && (
                      <CoverCard taskId={id} />
                      )
                    }
                    {
                      Labels && action.id === 3 && (
                        <LabelCard tags={tags} taskId={id} />
                      )
                    }
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
 );
}