import React from 'react'
import Hero from './../../herosecttion/Hero'
import {HomeObjOne,HomeObjThree,HomeObjTwo,HomeObjFour} from './Data'
import Pricing from './../../pricing/Pricing'
import Footer from './../footer/Footer'
function Home() {
    return (
        <div>
            <Hero {...HomeObjOne}/>
            <Hero {...HomeObjThree}/>
            <Hero {...HomeObjTwo}/>
            <Pricing/>
            <Hero {...HomeObjFour}/>
            <Footer/>
        </div>
    )
}

export default Home
