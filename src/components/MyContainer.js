import React from 'react'
import MyHOC from './MyHOC';
import About from './About';

const wrappedAbout = MyHOC(About, {name: "Kalle"});

const MyContainer = () => {
  return (
    <div>
      <wrappedAbout />
    </div>
  )
}

export default MyContainer;