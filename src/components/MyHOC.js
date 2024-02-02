import React from 'react'

const MyHOC = (wrappedComponent, {name}) => {
  return () => (
    <div className="wrapper">
        <wrappedComponent name={name} />
    </div>
  );
};

export default MyHOC