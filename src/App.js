import Navbar from "./components/Navbar";
import styled from 'styled-components'
import Home from "./components/Home";
import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";

import Product from "./components/Product";

import ImageSliderView from "./components/ImageSlider";
import Footer from "./components/Footer";

const Container = styled.div`
/* height: 100vh; */

`

function App() {
  return (
    <>
    <Container>
    <Navbar/>
    <Home/>
    

    <HomeSection1/>
    <HomeSection2/>
    <Product/>
    <ImageSliderView/>
    <Footer/>
    </Container>
    </>
   
  );
}

export default App;
