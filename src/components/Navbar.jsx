import React from 'react'
import MyLogo from '../assets/GameLogo.png'


const Navbar = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className='bg-[#2C5C4B] flex flex-row items-center'>
        <img src={MyLogo} alt='' className='w-[150px] h-[90px] p-1'/>

        <div className='flex flex-row items-center gap-[30px]' >
        <h1 className='font-bold text-white text-3xl'>GAMES FIESTA</h1>
        <h1 className='text-white text-5xl'>COME. PLAY. WIN BIG!!</h1>
        </div>
        {/* <div className='flex flex-row items-center gap-[30px]' >
        <h1 className='font-bold text-white text-3xl'>GAMES FIESTA</h1>
        <h1 className='text-white text-5xl'>COME. PLAY. WIN BIG!!</h1>
        </div> */}
       
        
    </div>
  )
}

export default Navbar