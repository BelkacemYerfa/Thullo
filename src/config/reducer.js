export const initialState = {
 user : null , 
 toDoList : [
  {
    tag : 'Backlog' , 
    task : [
      {
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
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
          } , 
          {
            name : 'bylka' , 
            image : 'https://w0.peakpx.com/wallpaper/331/150/HD-wallpaper-sad-boy-hotaro-art-cartoon-sadboy-dark-hotarooreki-feeling-anime-thumbnail.jpg'
          }
        ] , 
        comments : [
          {
            username:'kratos' ,
            createDate : '26 december 2022' , 
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg' ,  
            comment : '“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton' ,
          } , 
          {
            username:'bylka' ,
            createDate : '30 december 2022' , 
            image : 'https://w0.peakpx.com/wallpaper/331/150/HD-wallpaper-sad-boy-hotaro-art-cartoon-sadboy-dark-hotarooreki-feeling-anime-thumbnail.jpg' ,  
            comment : 'some random data from some cases' ,}
        ] , 
        description : 'Just A random Data for some Cases'
      } , 
    ] , 
  },
  {
    tag : 'In Progress',
    task : [
      {
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
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
          }
        ] , 
        comments : [
          {
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
    tag : 'In Reviews' ,
    task : [
      {
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
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
          }
        ] , 
        comments : [
          {
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
    tag : 'In Reviews' ,
    task : [
      {
        image : 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg' ,
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
            image : 'https://avatarfiles.alphacoders.com/127/thumb-127272.jpg'
          } ,
          {
            name : 'Long Zu',
            image : 'https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg'
          }
        ] , 
       comments : [
          {
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
   default : return state 
  }
}