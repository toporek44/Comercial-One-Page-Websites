import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width:95%;
  height: 100%;
  margin: 3rem 0 2rem;
  
   @media (min-width: 410px){
       min-width: 400px;
    }
    
   
`
const TextContent = styled.div`
    background: #fff ;
    color:#4CB2F9;
    width:100%;
    height: 100%;
    resize: none;
    border:none;
    padding: 1.5rem;
    font-weight: 300;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 650px;


&:focus {
        outline: none;
    }

    ::-webkit-scrollbar {
        width: 10px;
    &-track{
            background: #fff;
        }
    &-thumb{
            border-radius: 5px;
            background: #1D83D4;

        &:hover{
                cursor: pointer;
                background: #176daf;
            }
        }
    }
`

const Title = styled.p`
font-size: 2.2rem;
color:#177AC0;
`


const Paragraph = styled.p`
font-size: 1.6rem;
color:#4CB2F9;
`




const Info = () => {
    return (
        <Wrapper>
            <TextContent type="text">
                <Title>Title</Title>
                <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit
                    interdum id. Sed ut risus nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod
                    elit interdum id. Sed ut risus nec nulla elementum vivererra vel eu elit. Fusce miLorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut risus
                    nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut
                </Paragraph>
                <Title>Title</Title>
                <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit
                    interdum id. Sed ut risus nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod
                    elit interdum id. Sed ut risus nec nulla elementum vivererra vel eu elit. Fusce miLorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut risus
                    nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut
                </Paragraph>

                <Title>Title</Title>
                <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut
                    euismod elit
                    interdum id. Sed ut risus nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod
                    elit interdum id. Sed ut risus nec nulla elementum vivererra vel eu elit. Fusce miLorem ipsum dolor
                    sit
                    amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut
                    risus
                    nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed
                    ut
                </Paragraph>



                <Title>Title</Title>
                <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut
                    euismod elit
                    interdum id. Sed ut risus nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod
                    elit interdum id. Sed ut risus nec nulla elementum vivererra vel eu elit. Fusce miLorem ipsum dolor
                    sit
                    amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut
                    risus
                    nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed
                    ut
                </Paragraph>

                <Title>Title</Title>
                <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut
                    euismod elit
                    interdum id. Sed ut risus nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod
                    elit interdum id. Sed ut risus nec nulla elementum vivererra vel eu elit. Fusce miLorem ipsum dolor
                    sit
                    amet, consectetur adipiscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed ut
                    risus
                    nec nulla elementum viviscing elit. Etiam ornare sagittis quam, ut euismod elit interdum id. Sed
                    ut
                </Paragraph>

            </TextContent>
        </Wrapper>
    );
};

export default Info;