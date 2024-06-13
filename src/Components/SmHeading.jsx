import React from 'react'
import "./SmHeading.scss"

const SmHeading = ({className="", data}) => {
  return (
    <h3 className={`base-heading ${className}`}>{data}</h3>
  )
}

export default SmHeading