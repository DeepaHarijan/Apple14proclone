import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css'

import styled from 'styled-components';
import React from 'react'
import Movie from '../Images/movie1.png'
import Movie2 from '../Images/movie2.png'
import Movie4 from '../Images/movie4.png'
import Movie3 from '../Images/movie3.png'
import Movie5 from '../Images/movie5.png'

const ContainerSlider = styled.div`
    
`

const ImageSliderView = () => {
  return (
    <ContainerSlider >
    <Carousel  autoPlay={true} transitionTime="1000" showThumbs={false} stopOnHover={false} infiniteLoop={true}>
                <div className='container' >
                    <img style={{width:"100%"}} src={Movie3} />
                    
                </div>
                <div className='container' >
                    <img style={{width:"100%"}} src={Movie4} />
                    
                </div>
                <div className='container' >
                    <img style={{width:"100%"}} src={Movie5} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>

                <div className='container' >
                    <img style={{width:"100%"}} src="https://is1-ssl.mzstatic.com/image/thumb/BbgB29IpzbsElUUy-SFe0g/1679x945sr.webp" />
                    
                </div>

                <div className='container' >
                    <img style={{width:"100%"}} src="https://www.apple.com/tv-pr/shows-and-films/n/now-and-then/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Now_And_Then_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1658949313656" />
                    
                </div>

                <div className='container' >
                    <img style={{width:"100%"}} src={Movie} />
                    
                </div>

                <div className='container' >
                    <img style={{width:"100%"}} src={Movie2} />
                    
                </div>
            </Carousel>
            </ContainerSlider>
  )
}

export default ImageSliderView