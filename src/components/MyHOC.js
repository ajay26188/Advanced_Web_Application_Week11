import React from 'react'

const MyHOC = (WrappedComponent, {name}) => {
    return class extends React.Component {
        render() {
            return (
                <div className="wrapper">
                    <div className="wrapper">
                    <WrappedComponent name={name} />
                    </div>
                </div>
            )
        }
    }
}

export default MyHOC;
