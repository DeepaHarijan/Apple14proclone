import React from 'react'
import styled from 'styled-components'
import { faBagShopping, faBars, faHamburger, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../Images/logo3.png'

const Container = styled.div`
  height  :45px ;
 background-color: #151515;
display: flex;
justify-content: center;
position: sticky;
   top:0px;
   left: 0;
   right:0;
   -webkit-backdrop-filter: blur(2em);
    /* backdrop-filter: blur(2em); */
    backdrop-filter: blur(0.8);    /* background: hsla(0, 100%, 0%, .3); */
    z-index: 1;

`

const Wrapper = styled.div`
 width: 100%;
 max-width: 1024px;
 display: flex;
justify-content: space-between;
align-items: center;

`


const Image = styled.img`
 width: 1.7%;
 color: white;
 @media (max-width:991px){
  width: 4%;
  display: flex;
  justify-content: flex-start;
 }

 
`

const Menu = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
 


`

const Hamburger = styled.div`
 
`
const MenuItem = styled.li`
 color   :#cfd8dc ;
 font-size: 12px;
 /* padding: 3px; */
 @media (Max-width:991px){
  display: none;
}
`
const Bars = styled.button`

    display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    border: none;
    position: absolute;
    top: 10px;
    right: 3px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
`

const Navbar = () => {
  return (
    <Container >
    <Wrapper>
    
    <Menu>
    <Image src={logo}></Image>
        <MenuItem>Store</MenuItem>
        <MenuItem>Mac</MenuItem>
        <MenuItem>iPad</MenuItem>
        <MenuItem>iPhone</MenuItem>
        <MenuItem>Watch</MenuItem>
        <MenuItem>Airpods</MenuItem>
        <MenuItem>TV & Home</MenuItem>
        <MenuItem>Only on Apple</MenuItem>
        <MenuItem>Accessories</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem><FontAwesomeIcon style={{fontSize:"14px"}} icon={faSearch} /></MenuItem>
        <MenuItem><FontAwesomeIcon style={{fontSize:"14px"}} icon={faBagShopping}/></MenuItem>
        
    </Menu>
      <Bars><FontAwesomeIcon icon={faBars}/></Bars>
    {/* <MenuIcons>
        <IconsItem><FontAwesomeIcon icon={faSearch} /></IconsItem>
        <IconsItem><FontAwesomeIcon icon={faBagShopping}/></IconsItem>
    </MenuIcons> */}
    </Wrapper>
</Container>
  )
}

export default Navbar