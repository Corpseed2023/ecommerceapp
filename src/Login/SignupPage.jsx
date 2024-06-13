import React from 'react'
import InputComp from '../Components/InputComp'
import SmHeading from '../Components/SmHeading'
import LoadButton from '../Components/LoadButton'

const SignUpPage = () => {
  return (
    <div className="center-box">
    <div className="box-design">
      <SmHeading data="Sign UP" />
      <InputComp placeholder="Enter Your Name..." label="Enter Your Name" />
      <InputComp
        placeholder="Enter Email Address..."
        label="Enter Email Address"
      />
      <InputComp
        placeholder="Enter your password..."
        label="Enter your Password"
      />
      <InputComp
        placeholder="Enter Confirm password..."
        label="Enter Confirm Password"
      />
      <LoadButton className="my-2" data="Sign UP" />
    </div>
  </div>
  )
}

export default SignUpPage