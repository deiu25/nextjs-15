import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3xl text-red-600'>Dashboard</h1>
        <main>{children}</main>
    </div>
  )
}

export default layout