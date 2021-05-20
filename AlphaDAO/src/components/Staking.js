import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import arrow from "../assets/arrow.svg"
import next from "../assets/next.svg"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
margin:7rem auto ;

 @media (min-width: 1025px) {
  width: 80%;
  margin-top: 5rem;

}

label {
color:#3e7aa3;
font-size: 2rem;
width: 100%;
}

.min {
font-size: 1.3rem;
color:#85CDFE;
width: 96%;
margin-bottom: 1rem;

 @media (min-width: 1025px) {
 margin-bottom: 2rem;
}

}
`

const StyledInput = styled.input`
width:100%;
height: 55px;
border: 2px solid #2380C4;
border-radius: 15px;
background:#85CDFE ;
color:#3e7aa3;
font-size: 2rem;
margin-bottom: .7rem;
padding:1rem 2rem;
&::placeholder {
color:#55A9E1;
}

&:focus{
outline: none;
}
`

const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-bottom: 2rem;

 @media (min-width: 1025px) {
margin-bottom: 4rem;
}

`

export const SmallButton = styled.button`
background: #85CDFE;
border:  2px solid #0F77BD;
box-shadow: -1px 2px 0 1px #207EC3;
border-radius: 3px;
margin:.6rem;
min-width:55px;
min-height: 55px;
max-width:55px;
max-height: 55px;
color:#fff;
font-family: "Staatliches", sans-serif;
font-weight: 300;
font-size: 2.2rem;
transition: .1s all ease-in-out;
padding:0;


 @media (min-width: 1025px) {
min-width:65px;
min-height: 65px;
max-width:65px;
max-height: 65px;
font-size: 2.5rem;
margin:1rem;

}

&:hover {
cursor: pointer;
transform: translate(-1px,1px);
box-shadow: 0 0 0 1px #207EC3;
transition: .1s all ease-in-out;
}


&:focus{
outline: none;
}

${({large})=> large && css`
min-width:122px;
min-height: 55px;
max-width:122px;
max-height: 55px;


 @media (min-width: 1025px) {
min-width:150px;
min-height: 65px;
max-width:150px;
max-height: 65px;

img {
width:40px;
}
}
img {
width:50px;
}
` }
`

const DetailBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:80%;
margin:1rem auto;
font-size: 2.2rem;
margin-top: 2rem;
color:#2B83C7;



 @media (min-width: 1025px) {
width:27%;
font-size: 2.6rem;
margin-top: 4rem;
}

`

const DepositInfo = styled.div`
display: flex;
color:#1F7EC3;
justify-content:center;
align-items: center;
position:absolute;
bottom: 20px;
`

const DepositButton = styled.button`
background: none;
border:none;
font-size: 2.2rem;
color:#1F7EC3;
margin-left: 1rem;
&:focus {
outline: none;
}
`



const WalletContent = () => {


    return (
        <Wrapper>
            <label >Stake Amount</label>
            <StyledInput placeholder="0.000"/>
            <span className="min">min. stake 1 Aph</span>
            <ButtonsContainer>
                <SmallButton>0.25</SmallButton>
                <SmallButton>0.50</SmallButton>
                <SmallButton>0.75</SmallButton>
                <SmallButton>reset</SmallButton>
                <SmallButton>Max</SmallButton>
                <SmallButton>1x</SmallButton>
                <SmallButton>2x</SmallButton>
                <SmallButton>4x</SmallButton>
                <SmallButton large><img src={arrow} alt="arrow"/></SmallButton>
            </ButtonsContainer>
            <DetailBox><span>APY</span><span>1.783%</span></DetailBox>
            <DepositInfo>don’t have enought APH?  <DepositButton href="#" target="_blank" rel="noreferrer noopener">Buy</DepositButton></DepositInfo>

        </Wrapper>
    );
};

export default WalletContent;