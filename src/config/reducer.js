export let initialState = {
 user : {
  photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
  username : 'Kratos',
  job : 'member'
 } , 
 BoardState : {
  state : 'Public' , 
  codeState : 'public' ,
 } , 
 users : [
  {
    photoURL : null , 
    job : 'admin' , 
    id : 'random1' , 
    username :'Belkacem' , 
  } ,
  {
    photoURL : null , 
    id : 'random2' , 
    job : 'member' , 
    username :'Aktham'
  } ,
  {
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg',
    id: 'random3',
    job : 'member',
    username : 'Kratos'
  }
 ] ,
 accounts : [
  {
    photoURL : null , 
    job : 'admin' , 
    id : 'random1' , 
    username :'Belkacem' , 
    added : true , 
    addNow : true , 
  } ,
  {
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
    id : 'random2' , 
    job : 'member' , 
    username :'kratos' ,
    added : true , 
    addNow : true , 
  },
  {
    photoURL : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg' , 
    id : 'random3' , 
    job : 'member' , 
    username :'Long Zu' ,
    added : true , 
    addNow : true , 
  } ,
  {
    photoURL : 'https://i.pinimg.com/originals/64/5b/c8/645bc8822281de496b8f7110b7568c57.jpg',
    id : 'random4' ,
    job : 'member' ,
    username : 'Shido' , 
    added : false , 
    addNow : false , 
  } , 
  {
    photoURL : null , 
    id : 'random5' ,
    job : 'member' ,
    username : 'Ayoub' ,
    added : false , 
    addNow : false , 
  } , 
 ] , 
 toDoList : [
  {
    id : 'list1' ,
    tag : 'Backlog' , 
    task : [
      {
        id : 'task1' ,
        image : 'https://images6.alphacoders.com/607/thumb-1920-607771.jpg' ,
        title : 'Ocean' , 
        tags : [
          {
            tagName : 'Design' , 
            bg:'#219653' , 
            fontColor : '#D3EADD'  , 
          },
          {
            tagName : 'concept' , 
            bg:'#9B51E0' , 
            fontColor : '#D3EADD'  , 
          }
        ] , 
        comments : [] , 
        description : 'Just A random Data for some Cases'
      } , 
    ] , 
  },
  {
    id : 'list2' ,
    tag : 'In Progress',
    task : [
      {
        id : 'task2' ,
        image : 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg' ,
        title : 'Working' , 
        tags : [
          {
            tagName : 'Technical' , 
            bg:'#2F80ED' , 
            fontColor : '#D3EADD'  , 
          },
          {
            tagName : 'Full-Stack' , 
            bg:'#F2994A' , 
            fontColor : '#D3EADD'  , 
          }
        ] ,
        comments : [] , 
        description : 'Just A random Data for some Cases'
      }
    ] , 
  },
  {
    id : 'list3' ,
    tag : 'In Reviews' ,
    task : [
      {
        id : 'task3' ,
        image : 'https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg' ,
        title : 'Gym' , 
        tags : [
          {
            tagName : 'Front-End' , 
            bg:'#F2C94C' , 
            fontColor : '#D3EADD'  , 
          },
          {
            tagName : 'concept' , 
            bg:'#9B51E0' , 
            fontColor : '#D3EADD'  , 
          }
        ] , 
        comments : [] , 
        description : 'Just A random Data for some Cases'
      }
    ] , 
  },
 ] , 
 boardDescription : 'Just A random Data for some Cases'
}

export const reducer = (state , action)=>{
  console.log(action) ;
  switch(action.type){
   case 'SET_USER' : return {
    ...state , 
    user : action.user 
   }
   case 'ADD_NEW_USER' : return {
    ...state , 
    accounts : action.accounts
   }
   case 'ADD_NEW_USER_TO_BOARD' : return {
    ...state , 
    users : action.users
   }
   case 'SET_BOARD_STATE' : return {
    ...state ,
    boardState : action.boardState
   }
   case 'SET_TODOLIST' : return {
    ...state , 
    toDoList : action.toDoList 
   }
   case 'ADD_NEW_LIST' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'ADD_USER_TO_TASK' : return {
    ...state ,
    users : action.users
   }
   case 'RENAME_TASK' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'DELETE_TASK' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'DELETE_COMMENT' : return {
    ...state , 
    toDoList : action.toDoList
   }
   case 'ADD_ATTRIBUTE' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'SET_NEW_IMAGE' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'SET_NEW_COMMENT' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'SET_NEW_DESCRIPTION' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'ADD_NEW_CARD' : return {
    ...state ,
    toDoList : action.toDoList
   }
   case 'SET_NEW_BOARD_DESCRIPTION' : return {
    ...state , 
    boardDescription : action.boardDescription
   }
   case 'REMOVE_USER_FROM_BOARD' : return {
    ...state ,
    users : action.users , 
    accounts : action.accounts
   }
   default : return state 
  }
}