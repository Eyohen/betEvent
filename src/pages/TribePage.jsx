import React from 'react'
import { Link } from 'react-router-dom'

const TribePage = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-[100px] w-[150px]" src="./GameLogo.png" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Tribe Name</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
      <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-md font-medium leading-6 text-gray-900">Gender</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-white">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
          <input type='text' placeholder='Gender'  />
              <select name='' id=''>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
               
              </select>
          </div>
        </div>
  


        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-md font-medium leading-6 text-gray-900">Shirt Size</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-white">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
          <input type='text' placeholder='Shirt Size'  />
              <select name='' id=''>
                <option value={1}>Small</option>
                <option value={2}>Medium</option>
                <option value={3}>Large</option>
                <option value={4}>Xlarge</option>
                <option value={5}>Xxlarge</option>
              </select>
          </div>
        </div>


        <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Instagram media handle</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Upload a Clear Picture</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
   
       
<input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file"/>
   
      </div>


  
  
       
  
  
  <Link to={"/betrequest"}>
        <div className='mt-4'>
          <button type="submit" class="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12">Sign in</button>
        </div>
        </Link>
      </form>
  
      {/* <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p> */}
    </div>
  </div>
  )
}

export default TribePage