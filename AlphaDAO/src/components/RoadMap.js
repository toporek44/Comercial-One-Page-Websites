import React, {useContext} from 'react';
import styled, {css} from "styled-components";
import WindowContext from "../Contexts/WindowContext";

const Wrapper = styled.div`
  padding:0 3rem 4rem  3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  margin-top: 3rem;
`

const RoadMapStep = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:2rem 0;
`

const StepNumber = styled.div`
display: flex;
justify-content: center;  
align-items: center;
color:#0F77BD;
min-width: 40px;
height: 40px;
border-radius: 10px;
box-shadow: ${({secondary}) => !secondary? "0 0 20px -10px #212121" : "none"};
margin-right: 2rem;
font-size: 2.6rem;


   @media (min-width: 610px){
       min-width: 70px;
       height: 70px;
       font-size: 3.5rem;

    }


`

const StepContent = styled.p`
margin:0;
color:#5C5C5C;
font-size: 1.1rem;
box-shadow: ${({secondary}) => secondary? "0 0 20px -10px #212121" : "none"};
  padding:${({secondary}) => secondary? "1rem 1.5rem" : "0"};
  
  
     @media (min-width: 510px){
   font-size: 1.3rem;

    }
   
  @media (min-width: 810px){
   font-size: 1.45rem;

    }

`

const RoadMap = () => {
    // const {isMetamaskInstalled} = useContext(WindowContext)


    return (
       <Wrapper>
           <RoadMapStep>
               <StepNumber>1</StepNumber>
               <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittisectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Seec nulla elementum viverra vel eu elit. Fusce mi</StepContent>
           </RoadMapStep>


           <RoadMapStep>
               <StepNumber secondary>2</StepNumber>
               <StepContent secondary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittisectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Seec nulla elementum viverra vel eu elit. Fusce mi</StepContent>
           </RoadMapStep>


           <RoadMapStep>
               <StepNumber>3</StepNumber>
               <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittisectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Seec nulla elementum viverra vel eu elit. Fusce mi</StepContent>
           </RoadMapStep>

           <RoadMapStep>
               <StepNumber secondary>4</StepNumber>
               <StepContent secondary>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittisectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Seec nulla elementum viverra vel eu elit. Fusce mi</StepContent>
           </RoadMapStep>

           <RoadMapStep>
               <StepNumber>5</StepNumber>
               <StepContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittisectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Seec nulla elementum viverra vel eu elit. Fusce mi</StepContent>
           </RoadMapStep>

       </Wrapper>
    );
};

export default RoadMap;