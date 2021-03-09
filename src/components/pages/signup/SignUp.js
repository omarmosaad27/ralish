import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'
import {Button} from './../../button/Button'
import './Signup.css'
const SignUp = () => {
    return (
        <div className="signupsection">
            <div className="signupcontainer">
                <form >
                    <div className="form-control">
                        <input type="text" placeholder="user name"/>
                        <div className="icon">
                            <AiOutlineUser/>
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder="password"/>
                        <div className="icon">
                            <RiLockPasswordLine/>
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="email"/>
                        <div className="icon">
                            <HiOutlineMail/>
                        </div>
                    </div>
                    <Button buttonStyle="btn--basic"  buttonSize="btn--wider" >sign up</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
