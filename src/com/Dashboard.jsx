import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'

const Dashboard = () => {
  const ArrayData = [
    {
      id:1,
      title:"AC TV ETC",
      name:"Anik",
      roll:75,
      dec: 'when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.'
    },
    {
      id:2,
      name:"Tamim",
      title:"BL TV ETC",
      roll:105,
      dec: "desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy."
    },
    {
      id:3,
      name:"Omar",
      title:"WEB APP ETC",
      roll:77,
      dec: "There are many variations of passages of Lorem Ipsum available their default model text, and a search for will."
    },
    {
      id:4,
      name:"Tamim",
      title:"All Section",
      roll:105,
      dec: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
    },
  ]

  const [search, setSearch] = useSearchParams();
  const QuarySearch = search.get('text') || '';
  const [stage, setStage] = useState(QuarySearch);

  const dataFilter = ArrayData.filter(data => data.title.toLowerCase().includes(QuarySearch.toLowerCase()))

  const dataSearch = (e) => {
    e.preventDefault();    
    setSearch({text: stage})
    setStage('')       
  }


  // timer function
  const [time, setTime] = useState(0)
  const [isRaning, setIsRaning] = useState(false)

  useEffect(()=>{
    let timer;
    if(isRaning){
      timer = setInterval(()=>{
      setTime((count) => count + 1)
      }, 1000)
    }
   
    return () => clearInterval(timer)

  },[isRaning])

  
  // minute
  const [minute, setMinute] = useState(0)
  if(time === 60){
    setMinute((min) => min + 1)
    setTime(0)
  }


  // hour
  const [hour, setHour] = useState(0)
  if(minute === 60){
    setHour((min) => min + 1)
    setMinute(0)
  }

  if(hour === 12){
    setHour(0)
  }

  // click function
  const start = () => {
    setIsRaning(true)
  }
  const stop = () => {
    setIsRaning(false)
  }
  const reject = () => {
    setIsRaning(false)
    setTime(0)
  }
  return (
    <div className='container gap-6 mx-auto grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <form onSubmit={dataSearch} className='flex flex-col bg-cyan-100 justify-center items-center'>
        <input
        value={stage}
        onChange={(e) => setStage(e.target.value)}
         className='w-full px-3 focus:outline-none py-2' type="text" placeholder='Search Data'/>
        <button type='submit' className='bg-blue-500 cursor-pointer w-full py-1'>Search</button>
      </form>
      {
        dataFilter.map(item => (
          <div key={item.id} className=' bg-white shadow-2xl text-center m-2 py-4 px-2'>
             <h1>{item.name}</h1>
             <h4>{item.roll}</h4>
             <h6>{item.title}</h6>
             <p className='truncate'>{item.dec}</p>
             <Link className='bg-gray-200 flex justify-center py-1 mt-4' to={`show/${item.id}`}>show</Link>
          </div>
        ))
      }
      <div className='flex flex-col bg-white shadow-2xl justify-center items-center space-y-3'>
        <h1 className='text-lg'>hour: <span>{hour}</span></h1>
        <h2 className='text-lg'>minute: <span>{minute}</span></h2>
        <h5 className='text-lg'>Second: <span>{time}</span></h5>
        <div className='space-x-6 text-xl'>
          <button onClick={start} className='bg-green-500 py-1 px-2 rounded cursor-pointer'>Start</button>
          <button onClick={stop} className='bg-blue-500 py-1 px-2 rounded cursor-pointer'>Stop</button>
          <button onClick={reject} className='bg-red-500 py-1 px-2 rounded cursor-pointer'>Reject</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard