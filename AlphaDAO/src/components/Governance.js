import React, {useContext} from 'react';
import styled from 'styled-components'
import WindowContext from "../Contexts/WindowContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;
  font-size: 6rem;
  color:#0F77BD;
  text-align: center;
`

const WalletContent = () => {


    return (
        <Wrapper>
                Coming Soon
        </Wrapper>
    );
};

export default WalletContent;