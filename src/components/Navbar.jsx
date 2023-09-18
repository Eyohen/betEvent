import React from 'react'



const Navbar = () => {



  return (
    <div className='bg-[#2C5C4B] flex flex-row items-center'>
        <img src="./GameLogo.png" alt='' className='w-[150px] h-[90px] p-1'/>

        <div className='flex flex-row items-center gap-[800px]' >
        <h1 className='font-bold text-white text-3xl'>BETWINNER</h1>
        <h1 className='bg-[#FFC000] text-[#2C5C4B] p-2 rounded-lg text-lg font-bold'>Login</h1>

        </div>
        
    </div>
  )
}

export default Navbar