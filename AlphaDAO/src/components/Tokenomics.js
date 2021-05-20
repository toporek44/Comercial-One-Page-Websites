import React, {useContext} from 'react';
import styled from 'styled-components'
import WindowContext from "../Contexts/WindowContext";
import {ReactComponent as TotalSupplyGraph} from "../assets/totalsupply.svg";
import {ReactComponent as CirculatingGraph} from "../assets/circulating.svg";
import {ReactComponent as StakingGraph} from "../assets/stakinggraph.svg";
import {ReactComponent as TokenomicsGraph1} from "../assets/tokenomicsgraph2.svg";
import {ReactComponent as TokenomicsGraph2} from "../assets/tokenomicsgraph3.svg";

const Wrapper = styled.div`
padding: 0 3rem 2rem 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-top: 5rem;
`



const SupplyGraph = styled.div`
position:relative;
margin:0 auto;
svg {
width:100%;
}
`

const Value = styled.p`
  color:#Fff;
  position:absolute;
  left:50%;
  top:50%;
  font-size: 1.6rem;
  transform: translate(-50%, -50%);
  margin: 0;
  
  
  @media (min-width: 1025px){
    font-size: 2rem;
    }
`

const Title = styled.p`
margin:1.5rem 0;
font-size: 2rem;
color:#1D8FDC;
text-align: left;

  @media (min-width: 1025px){
  font-size: 3rem;
    }
`

const Tokenomics = () => {


    return (
        <Wrapper>

            <Title>Total Supply</Title>
            <SupplyGraph>
                    <Value>10.000.000</Value>
                <TotalSupplyGraph/>
            </SupplyGraph>

            <Title>Circulating Supply</Title>
            <SupplyGraph>
                <Value>6.000.000</Value>
                <TokenomicsGraph1/>
            </SupplyGraph>

            <Title>Staking</Title>
            <SupplyGraph>
                <Value>3.000.000</Value>
                <CirculatingGraph/>

            </SupplyGraph>

            <Title>Staking</Title>
            <SupplyGraph>
                <Value>1.000.000</Value>
                <StakingGraph/>
            </SupplyGraph>

            <Title>Staking</Title>
            <SupplyGraph>
                <Value>500.000</Value>
                <TokenomicsGraph2/>
            </SupplyGraph>
        </Wrapper>
    );
};

export default Tokenomics;