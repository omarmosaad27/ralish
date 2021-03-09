import React from 'react'
import { Link } from 'react-router-dom'
import "./Pricing.css"
import {FaFire} from 'react-icons/fa'
import {BsXDiamond} from 'react-icons/bs'
import {GiCrystalize} from "react-icons/gi";
import {Button} from './../../components/button/Button'
import {IconContext} from 'react-icons/lib'
const Pricing = () => {
    return (
        <IconContext.Provider value={{color:'#fff',size:64}}>
        <div className="pricing-section">
            <div className="pricing-wrapper">
                <h2 className="pricing-heading">pricing</h2>
                <div className="pricing-container">
                    <Link to="/SignUp" className="pricing-card">
                        
                            <div className="pricing-card-info">
                                <div className="pricing-icon">
                                    <FaFire/>
                                </div>
                                <h3>starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className="pricing-features">
                                    <li>100 transactions</li>
                                    <li>2% cash back</li>
                                    <li>$10.000 limit</li>
                                </ul>
                                <Button buttonSize="btn--large" buttonColor="primary">Choose plan</Button>

                            </div>
                        
                    </Link>
                    <Link to="/SignUp" className="pricing-card">
                        
                            <div className="pricing-card-info">
                                <div className="pricing-icon">
                                    <BsXDiamond/>
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.99</h4>
                                <p>per month</p>
                                <ul className="pricing-features">
                                    <li>1000  transactions</li>
                                    <li>3.5% cash back</li>
                                    <li>$100.000 limit</li>
                                </ul>
                                <Button buttonSize="btn--large" buttonColor="blue">Choose plan</Button>

                            </div>
                        
                    </Link>
                    <Link to="/sign-up" className="pricing-card">
                        
                            <div className="pricing-card-info">
                                <div className="pricing-icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$99.99</h4>
                                <p>per month</p>
                                <ul className="pricing-features">
                                    <li>unlimited  transactions</li>
                                    <li>5% cash back</li>
                                    <li>unlimited spending</li>
                                </ul>
                                <Button buttonSize="btn--large" buttonColor="primary">Choose plan</Button>

                            </div>
                        
                    </Link>

                </div>
            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
