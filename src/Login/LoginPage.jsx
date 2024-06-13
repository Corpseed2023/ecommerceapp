import React from 'react'
import InputComp from '../Components/InputComp'
import "./LoginPage.scss"
import LoadButton from '../Components/LoadButton'
import SmHeading from '../Components/SmHeading'

const LoginPage = () => {
  return (
    <div className='center-box'>     
        <div className='box-design'>
            <SmHeading data="LOGIN" />
            <InputComp placeholder="Enter Email Address..." label="Enter Email Address" />
            <InputComp placeholder="Enter your password..." label="Enter your Password" />
            <LoadButton className='my-2' data="Login" />
        </div>
    </div>
  )
}

export default LoginPage