import React from 'react'
import { Link, Outlet, useParams } from 'react-router'

const Show = () => {

    const {id} = useParams();
    console.log(id)
  return (
    <div className='flex flex-col space-y-4 justify-center items-center h-screen'>
        <h1 className='text-2xl'>User Id: <span className='text-blue-600 font-bold'>{id}</span></h1>
        <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default Show  