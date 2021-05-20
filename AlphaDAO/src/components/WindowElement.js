import React, {forwardRef, useState} from 'react';
import styled from 'styled-components'
import Draggable from "react-draggable";
import {device} from "../device";

const DragWrapper = styled.div`
min-height: 385px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
margin:4rem 0;
box-shadow: 4px 4px 10px -4px #212121;
position: relative;
border-radius: 20px;

    @media (min-width: 410px){
       width: 400px;
    }

    @media ${device.tablet} {
        margin:0;
    }
    @media ${device.laptop} {
        display: none;
        position:absolute;
        min-width:${( {secondary} ) => secondary? "900px" : "550px"};
        min-height: ${( {secondary} ) => secondary? "650px" : "650px"};
        top:${( {top} ) => top? top : "initial"};
        left:${( {left} ) => left? left : "initial"}; 
        z-index:${( {isDragActive, index} ) => isDragActive? index+1 : index-1};
        max-height:900px;


    }
`



const Wrapper = styled.div`
width:300px;
min-height: 385px;
background: #fff ;
border-radius: 20px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
position:relative;
z-index: 10;
padding-top: 3rem;

  @media (min-width: 410px){
       width: 400px;
    }

@media ${device.laptop} {

transform: initial;
min-width:${( {secondary} ) => secondary? "900px" : "550px"};
min-height: ${( {secondary} ) => secondary? "650px" : "650px"};
max-height:900px;
}
`



const ControlBar = styled.div`
width:100%;
background: linear-gradient(269.95deg, #408CCE -2.52%, #0E76BC 47.11%);
position:absolute;
padding: .5rem 1.4rem;
top:0;
left:0;
display: flex;
justify-content: space-between;
align-items: center;
color:#fff;
user-select: none;

cursor: ${ ( {isDragActive} ) => isDragActive? "grab" : "initial" };
z-index: ${ ( {isDragActive} ) => isDragActive? "9900" : "-20" } ;




svg {
position:relative;
z-index: 999;
}
`

const StyledCloseBtn = styled.button`
background:#FF7777;
width:15px;
min-width: 15px;
max-width: 15px;
min-height: 10px;
height: 15px;
border-radius: 10px;
border:none;

&:hover {
  cursor: pointer;
  background:#a74e4e;

}

&:focus {
outline: none;
}
`



const WindowElement = forwardRef( ({children, title, handleClosing, secondary, top, left}, ref,...props)  => {
    const [isDragActive, setDragActive] = useState(false)
    const [index, setIndex] = useState(1)

    return (

        <>
            <Draggable  bounds="parent" onMouseDown={() => setDragActive(!isDragActive)} allowAnyClick={false}  handle=".handle-1" >
                <DragWrapper secondary={secondary} top={top} left={left} isDragActive={isDragActive} index={index} className="dragging">

                                <Wrapper {...props}  secondary={secondary}  >
                                    <ControlBar  isDragActive={isDragActive} className="handle-1">
                                        {title}
                                        <StyledCloseBtn onClick={handleClosing} />
                                    </ControlBar>
                                    {children}
                                </Wrapper>

                </DragWrapper>
            </Draggable>


                <DragWrapper secondary={secondary} top={top} left={left} isDragActive={isDragActive} index={index}>

                    <Wrapper {...props}  secondary={secondary}  >
                            <ControlBar  isDragActive={isDragActive}>
                                {title}
                                <StyledCloseBtn onClick={handleClosing} />
                            </ControlBar>
                        {children}
                    </Wrapper>

                </DragWrapper>
        </>
    );
});

export default WindowElement;