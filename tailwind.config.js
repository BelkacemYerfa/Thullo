/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        borderColor : '#E0E0E0',
        selectionBoardColor : '#828282',
        selectionBoardBg : '#F2F2F2' , 
        searchBtnBg : '#2F80ED' , 
        tableVisibility : '#4F4F4F' ,
        userToAddBg : '#BDBDBD' , 
      } , 
      cursor : {
        image : "url('https://www.freeiconspng.com/thumbs/cursor-png/hand-cursor-png-click-cursor-hand-icon-13.png') , pointer "
      },
      boxShadow : {
        navBarBox : ' 0px 2px 2px rgba(0, 0, 0, 0.05)' , 
        searchBox : ' 0px 2px 10px rgba(0, 0, 0, 0.05)' , 
        fileBox : '0px 2px 4px rgba(0, 0, 0, 0.05) '
      },
      fontFamily : {
        mainFont : 'Poppins, sans-serif'
      } 
    },
  },
  plugins: [],
}
