import React from 'react'

const MyHOC = (WrappedComponent, {name}) => {
    return class extends React.Component {
        render() {
            return (
                <div className="wrapper">
                    <WrappedComponent {...props} />
                </div>
            )
        }
    }
}

export default MyHOC;