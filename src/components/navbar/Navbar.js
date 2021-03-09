import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaFingerprint,FaTimes} from 'react-icons/fa'
import { Button } from '../button/Button'
import './navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button,setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960  ){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener("resize",showButton )
    return (
        
            <div className="Navbar">
                <div className="navbar-container container">
                    <Link to="/"  className="logo" onClick={closeMobileMenu}>
                        <FaFingerprint className="logo-icon"/>
                        RALISH
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" >Products</Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/SignUp" className="btn-link">
                                    <Button buttonStyle="btn--outline" >
                                        Sign up 
                                    </Button>
                                </Link>
                            ):
                                <Link to="/SignUp" className="btn-link">
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                        Sign up 
                                    </Button>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>

    )
}

export default Navbar
