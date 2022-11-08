import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #eeeeee;
`
const Wrapper = styled.div`
    display: flex;width:100%;
    max-width:1024px;
    justify-content: center;
`

const Info = styled.div`
   display: flex; 
   flex-direction: column;

   @media (max-width:991px){
    width: 100%;
    overflow-x: hidden;
   }
`

const List = styled.div`
  display: flex;
  gap  :50px ;

  @media (max-width:991px){
    
  }
`

const CR = styled.div`
    display: flex;
    justify-content: space-between;
`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Info>
               <div className='paragraph'>
                <p className='pTag'>*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, of 5% of successful order value available for qualifying HDFC Bank Credit Cards & HDFC Credit Card EMI only. Offer limited to Maximum Instant Savings Amount of ₹6000 per successful single order of ₹41900 and above. Instant savings available for up to two orders per rolling 90 day period with an eligible card. Card eligibility subject to terms and conditions between you and your card issuing bank. Total transaction value calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback, this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms & conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. 
                    Multiple separate orders cannot be combined for instant savings.</p>
                    <p className='pTag'>**No Cost EMI is available for purchases made using qualifying credit cards on 3- or 6-month tenures only. Minimum order spend applies as per your credit card’s issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Credit card eligibility is subject to terms and conditions between you and your credit card–issuing bank. Offer may be revised or withdrawn at any time without any prior notice.
                         Terms & conditions apply.</p>
                         <p className='pTag'>Representative example: Based off a 6-month tenure. ₹69900 total cost includes 16% p.a. and No Cost EMI savings of ₹3149, paid over 6 months as six monthly payments of ₹11650.</p><hr></hr>
               </div>
               
<div className='ResponsiveFooterMenu'>
<ul>
  <div className='resMenu'>
  <li>Shop and Learn</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>

  <div className='resMenu'>
  <li>Services</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>

  <div className='resMenu'>
  <li>Account</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
<hr></hr>

  <div className='resMenu'>
  <li>Apple Store</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>

  <div className='resMenu'>
  <li>For Business</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
<hr></hr>

  <div className='resMenu'>
  <li>For Education</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>

  <div className='resMenu'>
  <li>For Healthcare</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
<hr></hr>

  <div className='resMenu'>
  <li>Apple Values</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>

  <div className='resMenu'>
  <li>About Apple</li>
  <p><FontAwesomeIcon icon={faPlus}/></p>
  </div>
  <hr></hr>
</ul>
</div>

               <List>
        <div className='fLists'>
       <ul className="fList">
           <li className='heading'><strong>Shop and Learn</strong></li>
          <li className="fListItem">Store</li>
          <li className="fListItem">Mac</li>
          <li className="fListItem">iPad</li>
          <li className="fListItem">iPhone</li>
          <li className="fListItem">Watch</li>
          <li className="fListItem">Airpods</li>
          <li className="fListItem">TV & Home</li>
          <li className="fListItem">AirTag</li>
          <li className="fListItem">Accessories</li>
          <li className="fListItem">Gift Cards</li>
        </ul>
        </div>

        <div className='fLists'>
       <ul className="fList">
           <li className='heading'><strong>Services</strong></li>
          <li className="fListItem">Apple Music</li>
          <li className="fListItem">Apple TV+</li>
          <li className="fListItem">Apple Arcade</li>
          <li className="fListItem">iCloud</li>
          <li className="fListItem">Apple One</li>
          <li className="fListItem">Apple Books</li>
          <li className="fListItem">Apple Podcasts</li>
          <li className="fListItem">Apple Store</li>
          
        </ul>

        <ul>
        <li className='heading'><strong>Account</strong></li>
        <li className="fListItem">Manage your Apple ID</li>
        <li className="fListItem">Apple Store Account</li>
        <li className="fListItem">iCloud.com</li>
        </ul>
        </div>

        <div className='fLists'>
       <ul className="fList">
           <li className='heading'><strong>Apple Store</strong></li>
          <li className="fListItem">Ways to Buy</li>
          <li className="fListItem">Apple Trade In</li>
          <li className="fListItem">Recycling programme</li>
          <li className="fListItem">Order Status</li>
          <li className="fListItem">Shopping Help</li>
        </ul>

        
        </div>

        <div className='fLists'>
       <ul className="fList">
           <li className='heading'><strong>For Business</strong></li>
          <li className="fListItem">Apple and Business</li>
</ul>
          <ul className="fList">
          <li className='heading'><strong>For Education</strong></li>
          <li className="fListItem">Apple and education</li>
          <li className="fListItem">Shop for Education</li>
          <li className="fListItem">Shop for University</li>
          </ul>

          <ul className="fList">
          <li className='heading'><strong>For Healthcare</strong></li>
          <li className="fListItem">Apple in Healthcare</li>
          <li className="fListItem">Health on Apple Watch</li>
          </ul>
          
       
        </div>

        <div className='fLists'>
       <ul className="fList">
           <li className='heading'><strong>Apple Values</strong></li>
          <li className="fListItem">Accessibility</li>
          <li className="fListItem">Education</li>
          <li className="fListItem">Environment</li>
          <li className="fListItem">Privacy</li>
          <li className="fListItem">Supplier Responsibility</li>
        </ul>

        <ul className="fList">
        <li className='heading'><strong>About Apple</strong></li>
            <li className="fListItem">Newsroom</li>
          <li className="fListItem">Apple Leadership</li>
          <li className="fListItem">Career Opportunities</li>
          <li className="fListItem">Investors</li>
          <li className="fListItem">Ethnics and Compliance</li>
          <li className="fListItem">Events</li>
          <li className="fListItem">Contact Apple</li>
        </ul>
        
        </div>
        </List> 
        <hr />



        <div>
            <p className='pTag'>More ways to shop: <span style={{color:"blue"}}>Find a retailer</span> near you. Or call 000800 040 1966.</p><hr></hr>
        </div>

        <CR>
        <p className='pTag'>Copyright © 2022 Apple Inc. All rights reserved.</p>
        <ul className='CRul'>
            <li className='pTag'>Privacy Policy </li><span style={{borderLeft:"1px solid gray"}}></span>
            <li className='pTag'>Terms of Use</li><span style={{borderLeft:"1px solid gray"}}></span>
            <li className='pTag'>Sales Policy</li><span style={{borderLeft:"1px solid gray"}}></span>
            <li className='pTag'>Legal</li><span style={{borderLeft:"1px solid gray"}}></span>
            <li className='pTag'>Site Map</li><span style={{borderLeft:"1px solid gray"}}></span>
        </ul>
        
        <p className='pTag'>India</p>
       
       </CR>

       
        </Info> 
       
       
        </Wrapper>
    </Container>
  )
}

export default Footer