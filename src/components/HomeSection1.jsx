import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import './HomeSection1.css'
import I14Pro  from '../Images/i14pro2.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    margin: 0;
    
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    
`
const Info = styled.div`
 width: 60%;
 
`

const Content = styled.div`
 
`

const Image = styled.img`
   width :100% ;
   margin: auto;
   display: block;

   @media (max-width: 991px){
    width: 80%;
    margin-top: 20px;
   }

   
`

const HomeSection1 = () => {
  return (
    <Container>
        <Wrapper>
            <Info>
                <Content className='Desc__Sec1'>
                <h1>iPhone 14 Pro</h1>
                <h3>Pro.Beyond.</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image src={I14Pro}></Image>
                </Content>
                
            </Info>
            
        </Wrapper>
    </Container>
  )
}

export default HomeSection1