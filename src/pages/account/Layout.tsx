import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <h1>This is the layout</h1>
            <div>{children}</div>
        </>
    )
}

export default Layout
