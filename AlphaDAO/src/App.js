import GlobalStyle from "./GlobalStyle";
import Taskbar from "./components/Taskbar";
import WindowElement from "./components/WindowElement";
import WindowContext from "./Contexts/WindowContext";
import React, {useState} from "react";
import styled from 'styled-components'
import RoadMap from "./components/RoadMap";
import Tokenomics from "./components/Tokenomics";
import {device} from "./device";
import bg from '../src/assets/mainbg.png'
import headingImage from '../src/assets/headinglogo.png'
import {OnboardingButton} from "./Metamask";
import Info from "./components/Info";
import Governance from "./components/Governance";
import Staking from "./components/Staking";

const WindowWrapper = styled.div`
width:100%;
height: 100%;
min-height: 800px;
padding: 9rem 0 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
z-index: 0;
overflow-x: hidden;
background: url(${bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
border-top: 10px solid #fff;



@media ${device.laptop} {
  justify-content: space-around;
  flex-direction: row;
  padding-top:0;
  height: 100vh;

}

.dragging {
display: none !important;

@media ${device.laptop} {
  display: flex !important;

}
}

`


const HeadingImage = styled.img`
width: 350px;
position:fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);


@media (min-width:400px) {
width: 400px;
}

@media (min-width:700px) {
width: 600px;
}

@media (min-width:1000px) {
width: initial;

}
`

const App = () => {
    const [isInfoOpen, setInfoOpen] = useState(false)
    const [isRoadMapOpen, setRoadMapOpen] = useState(false)
    const [isTokenOpen, setTokenOpen] = useState(false)
    const [isGovernanceOpen, setGovernanceOpen] = useState(false)
    const [isStakingOpen, setStakingOpen] = useState(false)
    const [isMetamaskInstalled, setMetamaskInstalled] = useState(false)


    return (
        <>
            <WindowContext.Provider value={{
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
                isMetamaskInstalled,
                setMetamaskInstalled
            }}>
                <GlobalStyle/>
                <WindowWrapper>
                    <HeadingImage src={headingImage} alt="wolf"/>
                    <OnboardingButton/>

                    {isInfoOpen ?

                        <WindowElement
                            secondary
                            top="50px"
                            left="60px"
                            title="Info" handleClosing={() => setInfoOpen(!isInfoOpen)
                        }>
                            <Info/>
                        </WindowElement>
                        : null}

                    {isRoadMapOpen ?
                        <WindowElement
                            top="50px"
                            left="600px"
                            title="RoadMap" handleClosing={() => setRoadMapOpen(!isRoadMapOpen)}>
                            <RoadMap/>
                        </WindowElement> : null}

                    {isTokenOpen ?
                        <WindowElement  title="Tokenomics" handleClosing={() => setTokenOpen(!isTokenOpen)}>
                            <Tokenomics/>
                        </WindowElement> : null}

                    {isGovernanceOpen ?
                        <WindowElement  title="Governance"
                                       handleClosing={() => setGovernanceOpen(!isGovernanceOpen)}>
                            <Governance/>
                        </WindowElement> : null}

                    {isStakingOpen ?
                        <WindowElement  title="Staking" handleClosing={() => setStakingOpen(!isStakingOpen)}>
                            <Staking/>
                        </WindowElement> : null}
                </WindowWrapper>
                <Taskbar/>
            </WindowContext.Provider>
        </>
    );
}

export default App;
