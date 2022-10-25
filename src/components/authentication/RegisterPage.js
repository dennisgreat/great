import{Button} from "../utilities/button/Button"
// import Logo from "../../Images/Logo.svg"
import google from "../../Images/Google.svg"
import Facebook from "../../Images/Facebook.svg"
import instagram from "../../Images/instagram.svg"
import linkedin from "../../Images/linkedin.svg"
import image from "../../Images/image1.jpg"
// import {BsEye} from "react-icons/bs"
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

import { App, SocialIconsHolder, Media,  Horizontal, Word, Form,Div,FormInput, Picture,P, Or, Create} from "./Register.style.js";
// import { render } from "@testing-library/react"
import { useState } from 'react';
import { Icon } from 'react-icons-kit';




export default function RegisterPage(){

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  
  
  const handleToggle=()=>{

    if(type==='password'){
      setIcon(eye);
      setType('text'); 
    }

    else{
      setIcon(eyeOff);
      setType('password');
    }
  }



  return(
      <App>
        <Word>
         {/* <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/> */}
         <Create>create event as an organisation</Create>
        
        
        
          <Media>
            <SocialIconsHolder>
             <img height={30} width={30} src={google} alt= "google"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
             <img height={30} width={30} src={Facebook} alt= "facebook"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
             <img height={30} width={30} src={instagram} alt= "instagram"/>
            </SocialIconsHolder>
            <SocialIconsHolder>
             <img height={30} width={30} src={linkedin} alt= "linkedin"/>
            </SocialIconsHolder>
          </Media>
          <Div>
           <Horizontal/>
             <Or>Or</Or>
           <Horizontal/>
          </Div>
          <Form>
           <p>Company Name</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Company Address</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Phone Number</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Email</p>
           <FormInput type= "type" id="input" placeholder="Type here..."/>
           <p>Password</p>
           <FormInput type="password" id="password" placeholder="Type here..."/>
           
           <span onClick={handleToggle}><Icon style={{marginLeft:'20%',marginTop:'-5%', cursor: 'pointer'}} icon={icon}/></span>
           <Button>Sign up</Button>
           <P><p style={{}}>Already have an account? <a href="sign in">Sign in</a></p></P>
           
          </Form>
         
        </Word>
        <Picture>
          <img style={{width: '490px', height:'965px', borderRadius:'0 10px 10px 0'}} src={image} alt="man"/>
        </Picture> 
        
      </App>
  )

}  
      
  


