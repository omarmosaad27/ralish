import React from 'react'
import {Button} from './../../button/Button'
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaFingerprint,FaFacebook,FaYoutube,FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    join our exclusive membership to receive the latest news
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at any time
                </p>
                <form className="footer-form" >
                    <input type="text" placeholder="your email" name="email" className="footer-input"/>
                    <Button  buttonSize="btn--wide">subscribe</Button>
                </form>
            </section>
            <section className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-item">
                        <h2>About us</h2>
                        <Link to="/sign-up">how it works</Link>
                        <Link to="/">testmonials</Link>
                        <Link to="/">careers</Link>
                        <Link to="/">investors</Link>
                        <Link to="/">terms of service</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>contact us</h2>
                        <Link to="/">contact</Link>
                        <Link to="/">support</Link>
                        <Link to="/">destinations</Link>
                        <Link to="/">sponserships</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    
                    <div className="footer-link-item">
                        <h2>videos</h2>
                        <Link to="/">submit video</Link>
                        <Link to="/">ambassadors</Link>
                        <Link to="/">agency</Link>
                        <Link to="/">influencer</Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>social media</h2>
                        <Link to="/">instagram</Link>
                        <Link to="/">facebook</Link>
                        <Link to="/">youtube</Link>
                        <Link to="/">twitter</Link>


                    </div>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="logo-wrap">
                        <Link to="/"  className="logo" >
                            <FaFingerprint className="logo-icon"/>
                            RALISH
                        </Link>
                    </div>
                    <div className="copyrights">
                        RALISH &copy; 2021
                    </div>
                    <div className="social-icons">
                        <Link to={'//https://facebook.com'} target="_blank" aria-label="facebook" className="social-media-link"><FaFacebook/></Link>
                        <Link to={'//https://youtube.com'} target="_blank" aria-label="youtube" className="social-media-link"><FaYoutube/></Link>
                        <Link to={'//https://twitter.com'} target="_blank" aria-label="twitter" className="social-media-link"><FaTwitter/></Link>
                        <Link to={'//https://instgram.com'} target="_blank" aria-label="instagram" className="social-media-link"><FiInstagram/></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
