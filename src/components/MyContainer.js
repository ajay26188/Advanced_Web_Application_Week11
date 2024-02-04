import React from 'react'
import MyHOC from './MyHOC';
import About from './About';

const MyContainer = () => {
  const WrappedAbout = MyHOC(About, {name: "Kalle"});
  return (
    <div>
      <WrappedAbout />
    </div>
  )
}

export default MyContainer;