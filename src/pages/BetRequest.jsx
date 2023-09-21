import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../utils/newRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const BetRequest = () => {

  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (betId) => {
      return newRequest.post('tribe/check/betwinnerId',  betId);
    },
    onSuccess:()=>{
      // queryClient.invalidateQueries(['reviews'])
      navigate("/home")
    }
  })

  console.log(currentUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    const betwinnerId = e.target[0].value;
   
    mutation.mutate({betwinnerId})
  }
  return (
    <div>
         <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-[100px] w-[150px]" src="./GameLogo.png" alt="Your Company"/>
    <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#2C5C4B]"> Thank you for registering for the Games Fiesta!!</h2>
    <h2 class="mt-10 text-center text-3xl font-medium leading-9 tracking-tight text-gray-900 ">Are you Interested in the BetTribes Competition?</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={handleSubmit}>
    

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-md font-medium leading-6 text-gray-900">BETWINNER ID</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-white hover:text-white">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>

      <div className='mt-4'>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12">SUBMIT ID</button>
      </div>
    
    </form>

    {/* <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p> */}
  </div>
</div>
    </div>
  )
}

export default BetRequest