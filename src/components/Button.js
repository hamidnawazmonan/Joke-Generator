import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button onClick={props.callApi}>Click to Generate a joke</button>
  )
}
