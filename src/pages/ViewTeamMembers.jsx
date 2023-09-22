import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import newRequest from '../utils/newRequest';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ViewTeamMembers = () => {
    const {id} = useParams();

  const {isLoading, error, data, refetch} = useQuery({ 
    queryKey: ['tribesingle'],
     queryFn: () => newRequest.get(`tribe/${id}`).then(res=>{
      return res.data;
     }) 
    })
    // console.log(data)

    const queryClient = useQueryClient()
    const mutation = useMutation({
      mutationFn: (regdata) => {

        console.log('this is regdata',regdata)
    
        window.alert(JSON.stringify(regdata))
    
        return newRequest.post("tribe/register", regdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // return upload(regdata, 'tribe/register', 'post')
      },
      onSuccess:()=>{
        queryClient.invalidateQueries(['tribesingle'])
        navigate("/seeteammembers")
      }
    
    })
    
  return (
    <div>
        <h1 className='text-center text-[#2C5C4B] font-bold text-lg mt-5'>My Team Members</h1>
        <div className='border p-2 mt-4 rounded-lg shadow-lg'>
            <div className='flex flex-row gap-2'>
            <img src="https://images.unsplash.com/photo-1540312479395-6b36e14a5961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
            className='w-12 h-12'
            />
            <div>
            <h1 className='text-lg'>name: Henry Eyo</h1>
            <h1 className='text-lg'>instagram: h_eyo</h1>
            </div>
            </div>


        </div>
        
    </div>
  )
}

export default ViewTeamMembers