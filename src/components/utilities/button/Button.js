import styled from "styled-components";

export const Button = styled.button`
  width: 21vw;
  height: 5vh;
  /* top: 600px; */
  /* left: 387px; */
  background-color: #FF2957;
  color: white;
  border: 1px solid #FF2957;
  outline: none;
  /* position: absolute; */
  border-radius: 5px;
  font-size: 18px;
  margin-top: 8%;
  cursor: pointer;
  /* margin-left: 5px; */

  @media only screen and (max-width: 768px){
    width: 95vw;
    height: 8vh;
    /* margin-right: 15%; */
    margin-left: -40%;
    margin-top: 15%;

  }
`