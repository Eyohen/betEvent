import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../utils/newRequest'

const Login = () => {
    const navigate = useNavigate()
    const [account, setAccount] = useState(false)

    const [user, setUser] = useState({
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      country:"",
      state:"",
      city:"",
     
    })

    const handleChange = (e) => {
      e.preventDefault()
      setUser((prev) =>{
        return {...prev, [e.target.name]: e.target.value}
      })
     
    }


    const handleSubmit = async (e) => {
      e.preventDefault()
      // const url = await upload(file)
      try{
        await newRequest.post("register",user
          // ...user, image:url
        )
        navigate("/betrequest")
      } catch(err){
        console.log(err)
      }
    }

    const accountToggle = () => {
      setAccount(!account)
    }
    
  return (

    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-[100px] w-[150px]" src="./GameLogo.png" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to you Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={handleSubmit}>
    

      <div>
        <div className="flex items-center justify-between">
        <label for="" class="block text-md font-medium leading-6 text-gray-900">Phone Number</label>
        <label for="" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="phone" name="phone" type="number"  onChange={handleChange} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email address</label>
        <label for="email" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email"  onChange={handleChange} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


    
   


      <div className='mt-4'>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12">Login</button>
      </div>
    
    </form>

    <p class="mt-10 text-center text-md text-gray-500">
      Don't have an account?
      <Link to={"/login"}>
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">Register</a>
      </Link>
   
    </p>
  </div>
</div>

     

  )
}

export default Login