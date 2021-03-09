import React from 'react'
import './button.css'
const STYLES = ['btn--primary' , 'btn--outline','btn--basic']

const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide','btn--wider']

const COLOR = ['primary' , 'blue' , 'red' ,'green' ]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor :null
    return(

        <button className={`btn ${checkButtonStyle} ${checkButttonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}
