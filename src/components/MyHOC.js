import React from 'react'

const MyHOC = (WrappedComponent) => {
    return (props) => (
        <div className="wrapper">
            <WrappedComponent {...props} name="DefaultName" />
        </div>
    )
}
export default MyHOC;