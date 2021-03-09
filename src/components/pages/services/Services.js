import React from 'react'
import Hero from './../../herosecttion/Hero'
import {HomeObjThree,HomeObjTwo,HomeObjFour} from './Data'
import Footer from './../footer/Footer'
function Services() {
    return (
        <div>
            
            <Hero {...HomeObjTwo}/>
            <Hero {...HomeObjThree}/>
            <Hero {...HomeObjFour}/>
            <Footer/>
        </div>
    )
}

export default Services
