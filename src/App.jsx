import React from 'react'
import { Link, Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <main className='flex flex-col justify-center items-center h-screen bg-gray-300'>
        <Link className='text-cyan-600 border-b-2 mb-2' to='/dashboard'>Dashboard</Link>
        <Outlet/>
      </main>
    </>
    
  )
}

export default App