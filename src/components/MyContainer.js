import React from 'react'
import MyHOC from './MyHOC';

const MyContainer = () => {
  return (
    <div>
        <h1>MyContainer</h1>
        <p>This is a MyContainer page.</p>
    </div>
  )
}

export default MyHOC(MyContainer, {name: "Kalle"});