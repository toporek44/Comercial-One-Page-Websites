import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components'
import logo from "../assets/logo.png"
import WindowContext from "../Contexts/WindowContext";
import {device} from "../device";
import token from "../assets/token.svg"
import info from "../assets/info.svg"
import governance from "../assets/governance.svg"
import staking from "../assets/staking.svg"
import crosshair from "../assets/crosshair.svg"
import triangle from "../assets/triangle.png"
import twitter from "../assets/twitter.png"
import telegram from "../assets/telegram.png"

const ScrollingWrapper = styled.div`
overflow-x: scroll;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
width:100%;
height: 70px;
max-height: 70px;
position:fixed;
bottom: 0;

  @media (min-width: 700px) {
  overflow: visible;
}

`

const Wrapper = styled.div`
width:760px;
height: 100%;
background:#fff;
display: flex;
align-items:  center;
z-index: 1111;


  @media (min-width: 700px) {
      width:100%;
}
`

const Menu = styled.button`
  background: transparent;
  border:none;
  color:#fff;
  font-size: 2.2rem;
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 50px;
  color: #75ABC8;
  
      @media ${device.laptop} {
        margin:0 1rem;
        margin-right: 3rem;

}
  
  img { 
  width:70px;
  height: 70px;
  

  }
  
  // &:hover {
  //cursor: pointer;
  //background:#05344e ;
  //transition: .3s background ease-in-out;
  //}
  //
   &:focus {
    outline: none;
  }

    span {
  display: none ;
  
  @media ${device.laptop} {
    display: block;

}
  }
`

const LabelContainer = styled.div`
position:absolute;
left: 50%;
height: 75px;
transform: translateX(-50%);
top:-20px;
opacity: 0;
z-index: 1;
min-width: 150px;
transition: .3s all ease-in-out;

`


const Label = styled.div`
position:relative;
width: 100%;
height: 50px;
background: #fff;
border-radius: 10px;
color: #0C5BA5;
font-size: 2.5rem;
box-shadow: 3px 4px 10px -3px #212121;
padding:1rem;
display: flex;
justify-content: center;
align-items: center;
img {
margin:0 1rem;
}

&::before {
content: "";
position:absolute;
left:50%;
transform: translateX(-50%);
bottom: -28px;
background: url(${triangle}) no-repeat;
height: 40px;
width: 40px;
background-size: 100% 100%;
}
`

const TaskbarItem = styled.button`
  background: #fff;
  width:${({secondary}) => secondary ? "150px" : "50px"};
  min-width:${({secondary}) => secondary ? "150px" : "50px"};
  height: 50px;
  border-radius: 10px;
  border:none;
  color:#0C5BA5;
  margin:0 .6rem;
  font-size: 2.5rem;
  position:relative;
  box-shadow: 0 0 10px -3px #212121;
  display: flex;
  justify-content: center; 
  align-items: center;
  overflow: hidden;
  transition: .3s all ease-in-out;
  z-index: 99;


    @media ${device.laptop} {
      margin:0 2rem;
}



  a {
    text-decoration: none;
     color:#0C5BA5;
     margin:0 1rem;

  }
  
  img {
    width: 45px;
  }
  
  &:hover {
  cursor: pointer;
  overflow: visible;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.28), inset 0px 0px 7px rgba(0, 0, 0, 0.25);
  transition: .3s all ease-in-out;
  

  
    @media (min-width: 700px) {
       ${LabelContainer} {
          opacity: 1;
          transform: translateX(-50%) translateY(-55px);
          transition: .3s all ease-in-out;
      }
}
    
  }
  
  &:focus {
    outline: none;
  }
  

`

const Time = styled.div`
  display: none ;
  color:#0C5BA5;
  width:100px;
  text-align: center;
  position:absolute;
  right:20px;
  font-size: 2rem;
      @media ${device.laptop} {
       display: block;
    }
  
`

const Taskbar = () => {
    const {
        isInfoOpen,
        setInfoOpen,
        isRoadMapOpen,
        setRoadMapOpen,
        isTokenOpen,
        setTokenOpen,
        isGovernanceOpen,
        setGovernanceOpen,
        isStakingOpen,
        setStakingOpen,
    } = useContext(WindowContext)

    const time = useRef(null)

    useEffect(() => {
        function refreshTime() {
            const dateString = new Date().toLocaleString("en-US", {timeZone: "GMT"});
            let formattedString = dateString.replace(", ", " ");
            if (time != null) {
                time.current.innerHTML = formattedString
                setTimeout(refreshTime, 1000)

            }

        }

        refreshTime()
    })


    return (
        <ScrollingWrapper>
            <Wrapper>
                <Menu><img src={logo} alt="logo"/></Menu>
                <TaskbarItem onClick={() => setInfoOpen(!isInfoOpen)}>
                    <LabelContainer>
                        <Label>Info</Label>
                    </LabelContainer>
                    <img src={info} alt=""/>
                </TaskbarItem>
                <TaskbarItem onClick={() => setRoadMapOpen(!isRoadMapOpen)}>
                    <LabelContainer>
                        <Label>RoadMap</Label>
                    </LabelContainer>
                    <img src={crosshair} alt=""/>
                </TaskbarItem>
                <TaskbarItem onClick={() => setTokenOpen(!isTokenOpen)}>
                    <LabelContainer>
                        <Label>Tokenomics</Label>
                    </LabelContainer>
                    <img src={token} alt=""/>
                </TaskbarItem>
                <TaskbarItem onClick={() => setGovernanceOpen(!isGovernanceOpen)}>
                    <LabelContainer>
                        <Label>Governance</Label>
                    </LabelContainer>
                    <img src={governance} alt=""/>
                </TaskbarItem>
                <TaskbarItem onClick={() => setStakingOpen(!isStakingOpen)}>
                    <LabelContainer>
                        <Label>Staking</Label>
                    </LabelContainer>
                    <img src={staking} alt=""/>
                </TaskbarItem>
                <TaskbarItem secondary>
                    {window.innerWidth < 700 ?
                        <>
                            <a href="#">
                                <img src={twitter} alt="twitter"/>
                            </a>
                            <a href="#">
                                <img src={telegram} alt="telegram"/>
                            </a>
                        </> :
                        <>
                        <LabelContainer class="socials">
                            <Label>
                                <a href="#" target="_blank" rel="noreferrer noopener">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer noopener">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </Label>
                        </LabelContainer>
                        Socials
                        </>
                        }
                        </TaskbarItem>
                        <TaskbarItem secondary><a href="#" target="_blank" rel="noreferrer noopener">Whitepaper</a></TaskbarItem>
                        <Time ref={time}></Time>
                        </Wrapper>
                        </ScrollingWrapper>
                        );
                    };

                            export default Taskbar;