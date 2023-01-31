export let initialState = {
 user : null , 
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
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
    id : 'random3' , 
    job : 'member' , 
    username :'kratos'
  },
  {
    photoURL : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg' , 
    id : 'random4' , 
    job : 'member' , 
    username :'Long Zu'
  }
 ] ,
 accounts : [
  {
    photoURL : null , 
    job : 'admin' , 
    id : 'random1' , 
    username :'Belkacem' , 
    added : true
  } ,
  {
    photoURL : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
    id : 'random2' , 
    job : 'member' , 
    username :'kratos' ,
    added : true
  },
  {
    photoURL : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg' , 
    id : 'random3' , 
    job : 'member' , 
    username :'Long Zu' ,
    added : true
  } ,
  {
    photoURL : 'https://i.pinimg.com/originals/64/5b/c8/645bc8822281de496b8f7110b7568c57.jpg',
    id : 'random4' ,
    job : 'member' ,
    username : 'Shido' , 
    added : false
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
        users : [
          {
            name : 'kratos',
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg',
            id : 'user6' , 
          } , 
          {
            name : 'bylka' , 
            image : 'https://w0.peakpx.com/wallpaper/331/150/HD-wallpaper-sad-boy-hotaro-art-cartoon-sadboy-dark-hotarooreki-feeling-anime-thumbnail.jpg',
            id : 'user5'
          } , 
          {
            name : 'Shido' , 
            image : 'https://i.pinimg.com/originals/64/5b/c8/645bc8822281de496b8f7110b7568c57.jpg',
            id : 'user7'
          } , 
          {
            name : 'Toka' , 
            image : 'https://i.pinimg.com/originals/10/34/3b/10343b907edd76570d58283ebd13555b.jpg',
            id : 'user8'
          } , 

        ] , 
        comments : [
          {
            id : 'comment1' , 
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          } , 
          {
            id : 'comment2' , 
            username:'bylka' ,
            createDate : '30 december 2022' , 
            image : 'https://w0.peakpx.com/wallpaper/331/150/HD-wallpaper-sad-boy-hotaro-art-cartoon-sadboy-dark-hotarooreki-feeling-anime-thumbnail.jpg' ,  
            comment : 'some random data from some cases' ,
          }
        ] , 
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
        users : [
          {
            name : 'kratos',
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
            id : 'user4'
          }
        ] , 
        comments : [
          {
            id : 'comment1' , 
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          }
        ] , 
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
        users : [
          {
            name : 'kratos',
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' , 
            id : 'user3'
          }
        ] , 
        comments : [
          {
            id : 'comment1' , 
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          }
        ] , 
        description : 'Just A random Data for some Cases'
      }
    ] , 
  },
  {
    id : 'list4' ,
    tag : 'In Reviews' ,
    task : [
      {
        id : 'task41' ,
        image : null ,
        title : 'Study' , 
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
        users : [
          {
            name : 'kratos',
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg',
            id : 'user1'
          } ,
          {
            name : 'Long Zu',
            image : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg',
            id : 'user2'
          }
        ] , 
       comments : [
          {
            id : 'comment1' , 
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          }
        ] , 
        description : 'Just A random Data for some Cases'
      },
      {
        id : 'task42' ,
        image : null ,
        title : 'Study' , 
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
        users : [
          {
            name : 'kratos',
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg',
            id : 'user1'
          } ,
          {
            name : 'Long Zu',
            image : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg',
            id : 'user2'
          }
        ] , 
       comments : [
          {
            id : 'comment1' , 
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          }
        ] , 
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
   case 'SET_TODOLIST' : return {
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
   case 'SET_NEW_BOARD_DESCRIPTION' : return {
    ...state , 
    boardDescription : action.boardDescription
   }
   case 'REMOVE_USER_FROM_BOARD' : return {
    ...state ,
    users : action.users
   }
   default : return state 
  }
}