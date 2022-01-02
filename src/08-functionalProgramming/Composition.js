import React from 'react'


const Button = ({size,color,text,...props})=>{
    return(
        <button
        style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color,

        }}
        >{text}</button>
    )
}

// compose different buttons with props 
const DangerButton = (props)=>{
    return(
        <Button {...props} color='red' />
    )
}

const BigSuccesButton =(props)=>{
    return(
        <Button {...props} size='large' color='green' />
    )
}


export { Button, DangerButton, BigSuccesButton}
