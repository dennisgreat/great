import Logo from "../../Images/Logo.svg"
import google from "../../Images/Google.svg"
import Facebook from "../../Images/Facebook.svg"
import instagram from "../../Images/instagram.svg"
import linkedin from "../../Images/linkedin.svg"
import {HiOutlineMail} from "react-icons/hi" 
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"
import { useState } from "react"
import {App,Image,Media, SocialIconsHolder, Horizontal,Or,Form1,Mail,Password,Forgot,Wont,Button, Div, Picture, Div1} from "./Sign.style";





export default function Sign(){

  const [click, setClick] = useState(false)
  const [visible, setVisibility] = useState(false)

  const handleClick = () => {
  setClick(!click)
  setVisibility(!visible)
}

const InputType = visible ? "text" : "password";
  

    return(
        // <Signin>
              <App>
                <Div1>
                  <Image>
                   <img style={{cursor:'pointer'}} src= {Logo} alt= "cabana"/>
                  </Image>
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
                      <div></div>
                      <Or>Or</Or>
                    <Horizontal/>
                  </Div> 

                  <Form1>
                    
                    <p>Email</p>
                    <Mail>
                     <input name="email" type="email" placeholder="Email..."/>
                     <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'5%', color:'#C4C4C4'}}/>
                    </Mail>

                    <p>Password</p> 
                    <Password>
                     <input name="password" type={InputType} placeholder="Password..."/>
                     {click ? <HiOutlineEye onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/> : 
                     <HiOutlineEyeOff onClick={handleClick} style={{margin: 'auto', top: 'auto', marginRight: '5%', color: '#C4C4C4'}}/>}
                    </Password>
                    <Forgot><a href="forgot password">Remember Me</a></Forgot>

                    {/* <Button>Sign in</Button> */}
                    <Wont>Don't have an account? <a href="sign up">Sign up for free</a> </Wont>
                  </Form1>
                </Div1>
                <Picture>
                 <img src={image} alt="man"/>
                </Picture>    
              </App> 
            
        // </Signin>
    ) 

    

}