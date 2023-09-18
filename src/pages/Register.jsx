import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
  return (

    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-[100px] w-[150px]" src="./GameLogo.png" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for BetWinner Event</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Full Name</label>
        <label className="text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Phone Number</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email address</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">State</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Country</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-md font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
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

 
//     <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
//     <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
//       <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
//         Sigin
//       </h2>
//       <form action="" class="w-full">
//         <div id="input" class="flex flex-col w-full my-5">
//           <label for="username" class="text-gray-500 mb-2"
//             >Username</label
//           >
//           <input
//             type="text"
//             id="username"
//             placeholder="Please insert your username"
//             class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
//           />
//         </div>
//         <div id="input" class="flex flex-col w-full my-5">
//           <label for="password" class="text-gray-500 mb-2"
//             >Password</label
//           >
//           <input
//             type="password"
//             id="password"
//             placeholder="Please insert your password"
//             class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
//           />
//         </div>
//         <div id="button" class="flex flex-col w-full my-5">
//           <button
//             type="button"
//             class="w-full py-4 bg-green-600 rounded-lg text-green-100"
//           >
//             <div class="flex flex-row items-center justify-center">
//               <div class="mr-2">
//                 <svg
//                   class="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
//                   ></path>
//                 </svg>
//               </div>
//               <div class="font-bold">Sigin</div>
//             </div>
//           </button>
//           <div class="flex justify-evenly mt-5">
//             <a
//               href="#"
//               class="w-full text-center font-medium text-gray-500"
//               >Recover password!</a
//             >
//             <a
//               href="#"
//               class="w-full text-center font-medium text-gray-500"
//               >Singup!</a
//             >
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
     

  )
}

export default Register