import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <h1>This is the layout</h1>
            <div>{children}</div>
        </>
    )
}

export default Layout
