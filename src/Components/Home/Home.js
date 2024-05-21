import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../categories/Category'
import Connect from '../connect/Connect'
import Bhk from '../bhk/Bhk'
import Gallery from '../gallery/Gallery'
import Feature from '../features/Feature'
import Specific from '../specification/Specific'
import Testimonial from '../testimonial/Testimonial'
import Maps from '../Map/Map'
// import Pop from '../pop-up/Pop'

function Home() {
  return (
    <div>
   <Hero/>
    <Category />
    <Connect/>
    <Bhk/>
    <Gallery />
    <Feature />
    <Specific/>
    <Testimonial />
    <Maps/>
    </div>
  )
}

export default Home