import styled from "styled-components"


  



export const App = styled.div`
margin: auto;
align-items: center;
width: 60vw;
height: max-content;
top: 0;
left: 0;
right : 0;
bottom: 0;
display: flex;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
font-family: 'Poppins', sans-serif;
background: #FFFFFF;
border: 2px solid rgba(32, 14, 50, 0.15);
border-radius: 10px;


@media only screen and (max-width: 768px){
  width:max-content;
  margin: 5%;
  box-shadow: none;
  border: none;
  
  
  
}
`

export const Word = styled.div`
 height: inherit;
 width: 30vw;
 padding: 5%;
 text-align: center;

 

 @media only screen and (max-width: 768px){
  margin-top: 10%;
  width:100vw;
}

`
export const Create = styled.div`
  align-items: center;
  margin-top: 2%;

 @media only screen and (max-width: 768px){

 }
  

`


export const SocialIconsHolder = styled.div`
/* box-sizing: border-box; */

/* position: absolute; */
width: 30px;
height: 30px;
/* left: 440px; */
/* top: 185px; */
padding: 10px;
border-radius: 50%;
border: 1px solid #D9D9D9;
display: flex;
cursor: pointer;
/* margin-right: 35px; */
/* margin-left: 25px; */

@media only screen and (max-width: 768px){
  justify-content: space-between;
  width: 25px;
  height: 25px;
  margin-left: 0.5%;
  margin-right: 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  
}
`

export const Media = styled.div`
 display: flex;
 justify-content: space-between;
 /* width: 10vw; */
 align-items: center;
 margin-left: 12%;
 width: 16vw;
 
 @media only screen and (max-width: 768px){
   justify-content: space-between;
   width: 45vw;
   margin-top: 5%;
   margin-left: 20%;

   /* margin: 5%; */
 }
  
`

export const Div = styled.div`
 display: flex;
 align-items: center;
 width: 20vw;

 @media only screen and (max-width: 768px){
  width: 90vw;
 }


`

export const Horizontal= styled.div`
   width: 20vw;
 
  height: 0.2vh;
  background-color: burlywood;
   

   

   @media only screen and (max-width: 768px){
    width: 60vw;
    /* margin-left: 15%; */

   }
`

export const Or = styled.div`
 width: 10vw;


@media only screen and (max-width: 768px){
  padding: 5%;

  
}


`

// export const FormInput = styled.FormInput`
//   width: 50%;
//   height:'5vh';
// `

export const Form = styled.div`
  margin-top: 1%;
  border-radius: 5px;
  /* border: 0.5px solid #000000; */
  text-align: left;
  input{
    border-radius: 5px;
    width: 20vw;
  }

  span{
    left: 39.9%;
    right: 59.51%;
    top: 56.85%;
    bottom: 42.32%;
  }

  @media only screen and (max-width: 768px){
     /* overflow: hidden; */
     /* width: 50%; */
    /* position: absolute; */
    padding-left: 80px;
    padding-right: 80px;
    display: block;
    /* height: 10vh; */
    /* border-radius: 5px; */
    
    input{
      border-radius: 5px;
      padding-left: 2px;
      width: 100vw;
      height: 8vh;
      /* margin-top: 5px; */
    
      
      

    }

    

    p{
      margin-left: -44%;
      margin-bottom: 4px;
    
    }

    span{
       display: none 
    }
    
  }
`
export const P = styled.div`
margin-left: 8%;

@media only screen and (max-width: 768px){
  margin-left: 15%;
  width: 50vw;
}

`

export const FormInput = styled.input`
  padding: 10px 20px ;
  border-radius: 2px;
  outline: none;
  font-size: 16px;
  border: 0.5px solid #000000 ;
  box-sizing: border-box;
  width:90%;
  height:5vh;
  
  @media screen and (max-width: 768px) {
    margin-left: -95px;
  }
`


export const Picture = styled.div`
/* box-sizing:border-box; */
/* width: 30vw; */
height: inherit;
/* border-radius: 10px; */
/* border: 0.5px solid rgba(32, 14, 50, 0.15); */


@media only screen and (max-width: 768px){
  display: none;
  
}
`


