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
          }
        ] , 
      } , 
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
          }
        ] , 
      }
    ] , 
  },
  {
    tag : 'In Progress',
    task : [
      {
        image : null ,
        title : '' , 
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
      }
    ] , 
  },
  {
    tag : 'In Reviews' ,
    task : [
      {
        image : null ,
        title : '' , 
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
      }
    ] , 
  },
  {
    tag : 'In Reviews' ,
    task : [
      {
        image : null ,
        title : '' , 
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