import React from 'react'

const MyHOC = (WrappedComponent, {name}) => {
  return (props) => (
    <div className="wrapper">
        <WrappedComponent {...props} name={name} />
    </div>
  );
};

export default MyHOC