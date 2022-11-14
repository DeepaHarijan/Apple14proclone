import { faAngleRight, faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import HomeImg from '../Images/HomeImage.jpg'
import './Home.css'
const Container = styled.div`
 display: flex;
 justify-content: center;   
`
const Wrapper = styled.div`
  width  :100% ;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  
 
`
const Info = styled.div`
    width: 800px;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
    @media (max-width:260px){
      width:500px;
    } 
`
const Image = styled.img`
  width  :50% ;
  

  @media (max-width: 991px) {
    width: 35%;
    margin-left: 15px;
  }

  
`
const Desc = styled.div`
width: 100%;
padding: 10px;
margin-left: -5rem;

@media (max-width:260px){
      padding: 5px;
      margin-left: -2rem;
    }
`
const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Info>
            <Image src={HomeImg}></Image>
            <Desc className='Desc'>
                <h1>iPad</h1>
                <h3>Lovable. Drawable. Magical</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
            </Desc>
            </Info>
          
        </Wrapper>
    </Container>
  )
}

export default Home