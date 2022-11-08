import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import './Product.css'
import IpadPro from '../Images/ipad-pro-bg.png'
import M2 from '../Images/m2.jpg'
import Tvlogo from '../Images/tv-logo3.png'
import Tv4k from '../Images/tv-4k.png'
import WatchLogo from '../Images/watch-ultra-logo.png'
import WatchImg from '../Images/watch-ultra.png'
import WatchSeries from '../Images/watch-series8.png'
import WatchSeriesLogo from '../Images/watch-series-logo.png'
import Macbook from '../Images/macbook.png'
import Airpods from '../Images/airpods.png'

const Wrapper = styled.div`
   display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 5px;

    @media (max-width:991px){
      display: flex;
      flex-direction: column;
    }
`
const ContainerDark = styled.div`
    width: 100%;
    /* height: 50%; */
    background-color: Black;
    
`
const Content = styled.div`
  display: flex;
  justify-content  :center ;
  align-items: center;
  flex-direction: column;
`
const Image = styled.img`
  max-width:100%; 


`
const Container = styled.div`
    width: 100%;
    /* height: 50%; */
    background-color: #eeeeee;
   
`

const Image2Logo = styled.img`
width: 100px;

@media (max-width:320px){
  width:70px;
}
`

const Image2 = styled.img`

    margin: auto;
    display: block;

`

const Product = () => {
  return (
    <Wrapper>
    <ContainerDark>
       <Content className='Desc__Card1 '>
                <h1>iPad Pro </h1>
                <h3>Supercharged by <span><img className='M2__img' src={M2}></img></span></h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image src={IpadPro}></Image>
                </Content> 
                
    </ContainerDark>


    <Container >
       <Content className='Desc__Card2 '>
                <Image2Logo src={Tvlogo}></Image2Logo>
                <h3>The Apple experience.</h3>
         <h3>Cinematic in every sense.</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image2 src={Tv4k}></Image2>
                </Content> 
                
                
    </Container>


    <Container style={{backgroundColor:"#fafafa"}}>
       <Content className='Desc__Card2 '>
                <Image2Logo style={{padding:"20px"}} src={WatchLogo}></Image2Logo>
                <h3>Adventure awaits.</h3>
    
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image2 src={WatchImg}></Image2>
                </Content> 
                
                
    </Container>
     
      
    <ContainerDark>
       <Content className='Desc__Card1 '>
                <Image2Logo style={{padding:"20px"}}  src={WatchSeriesLogo}></Image2Logo>
                <h3 style={{paddingTop:"20px"}}>A healthy leap ahead.</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image src={WatchSeries}></Image>
                </Content> 
                
    </ContainerDark>
     

    <Container style={{backgroundColor:"#fbf7f7"}}>
       <Content className='Desc__Card2 '>
                <h1>MacBook Air </h1>
                <h3>Supercharged by <span><img className='M2__img' src={M2}></img></span></h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image src={Macbook}></Image>
                </Content> 
                
    </Container>

    <ContainerDark>
       <Content className='Desc__Card1 '>
       <h1>Airpods Pro </h1>
                <h3 style={{paddingTop:"20px"}}>Rebuild from the sound up.</h3>
                <div className='buttons'>
                 <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                <p>Buy <FontAwesomeIcon icon={faAngleRight}/></p> 
                </div>
                <Image style={{width:"72%"}} src={Airpods}></Image>
                </Content> 
                
    </ContainerDark>
</Wrapper>
  )
}

export default Product