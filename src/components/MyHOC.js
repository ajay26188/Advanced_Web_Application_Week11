import React from 'react'

const MyHOC = (wrappedComponent, {name}) => {
  return () => (
    <div className="Wrapper">
        <wrappedComponent name={name} />
    </div>
  );
};

export default MyHOC