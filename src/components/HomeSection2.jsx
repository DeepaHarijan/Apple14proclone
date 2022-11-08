import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import './HomeSection2.css'
import I14  from '../Images/i14.png'

const Container = styled.div`
    display: flex;
    justify-content: center;
    
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
    width: 90%;
    margin-top: 20px;
   }
`

const HomeSection2 = () => {
  return (
    <Container>
        <Wrapper>
            <Info>
                <Content className='Desc__Sec2'>
                <h1>iPhone 14 </h1>
                <h3>Big and bigger.</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image src={I14}></Image>
                </Content>
                
            </Info>
            
        </Wrapper>
    </Container>
  )
}

export default HomeSection2