import React, { useEffect, useRef, useState } from 'react'
import TribeTiles from '../components/TribeTiles'
import newRequest from '../utils/newRequest'
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";


const Home = () => {
  const {isLoading, error, data, refetch} = useQuery({ 
    queryKey: ['tribe'],
     queryFn: () => newRequest.get('tribe').then(res=>{
      return res.data;
     })
    
    })

    console.log(data)
  return (
    <div>
             <div className='font-bold text-2xl text-[#2C5C4B] mt-4'>Choose Your Tribe </div>
     
                 <div className='grid grid-cols-5 gap-[110px]' >
                  {isLoading? "Loading..." : error ? "Something went wrong" : (data?.data?.map((tribe)=>(
                      <TribeTiles key={tribe.id} item={tribe}/>
                  )))}
                  
                 
               
                
                 </div>

            

           
             
            
    </div>
   
  )
}

export default Home