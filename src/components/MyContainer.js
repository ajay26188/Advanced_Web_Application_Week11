import React from 'react'
import MyHOC from './MyHOC';

const MyContainer = ({name}) => {
  return (
    <div>
        <h1>MyContainer</h1>
        <p>This is a MyContainer page.</p>
        <p>Hello, {name}!</p>
    </div>
  )
}

export default MyContainer;