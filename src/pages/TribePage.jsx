import React,{useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import newRequest from '../utils/newRequest';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MyLogo from '../assets/GameLogo.png'
import upload from '../utils/upload';

const TribePage = () => {
  const [user, setUser] = useState({
    gender:"male",
    shirtSize:"S",
    email:"",
    betwinnerId:"",
    socials:"",
  })
  const [profileImage, setProfileImage] = useState("")

  const handleImage = (e) => {
    e.preventDefault()
    console.log(e.target.files)
    setProfileImage(e.target.files[0])
  }

  const handleChange = (e) => {
    e.preventDefault()
    setUser((prev) =>{
      return {...prev, [e.target.name]: e.target.value}
    })

  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser)

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
    
        window.alert(JSON.stringify(regdata))
    
        return upload(regdata, 'tribe/register', post)
      },
      onSuccess:()=>{
        queryClient.invalidateQueries(['tribesingle'])
      }
    
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
    
        // Append the file input to the FormData object
        // formData.append('profileImage', e.target.profileImage.files[0]);
        formData.append('profileImage', profileImage);
    
        // Append other form data
        formData.append('socials', user.socials);
        formData.append('gender', user.gender);
        formData.append('shirtSize', user.shirtSize);
        formData.append('betwinnerId', user.betwinnerId);
        formData.append('email', user.email);
        formData.append('betTribeId', id);
    
        window.alert(JSON.stringify(formData))
    
        // Define the data object to be sent to the mutation
        const dataToSend = Object.fromEntries(formData.entries());
        console.log(dataToSend)
        // Use mutation.mutate to send the data to the backend
        mutation.mutate({...dataToSend});
    
    };



   
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-[100px] w-[150px]" src={MyLogo} alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{data?.data?.name}</h2>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{data?.data?.memberCount}</h2>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{data?.data?.isFilled? "Sorry This group is filled up join another tribe" :  "Not yet filled"}</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>

      <div>
        <div className="flex items-center justify-between">
        <label for="" class="block text-md font-medium leading-6 text-gray-900">betwinnerId</label>
        <label for="" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="betwinnerId" name="betwinnerId" type="text" onChange={handleChange} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
          <div class="flex items-center justify-between">
            <label for="" class="block text-md font-medium leading-6 text-gray-900">Gender</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-white">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">

              <select name='gender' id='gender' onChange={handleChange}>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Other</option>

              </select>
          </div>
        </div>



        <div>
          <div class="flex items-center justify-between">
            <label for="" class="block text-md font-medium leading-6 text-gray-900">Shirt Size</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-white">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2 rounded-lg">

              <select name='shirtSize' id='shirtSize' onChange={handleChange} >
                <option value={"S"}>Small</option>
                <option value={"M"}>Medium</option>
                <option value={"L"}>Large</option>
                <option value={"XL"}>Xlarge</option>
                <option value={"XXL"}>Xxlarge</option>
              </select>
          </div>
        </div>


        <div>
        <div className="flex items-center justify-between">
        <label for="" class="block text-md font-medium leading-6 text-gray-900">Instagram media handle</label>
        <label for="" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="socials" name="socials" type="text" onChange={handleChange} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="" class="block text-md font-medium leading-6 text-gray-900">Email</label>
        <label for="" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>
        <div class="mt-2">
          <input id="email" name="email" type="email" onChange={handleChange} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12" />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
        <label for="" class="block text-md font-medium leading-6 text-gray-900">Upload a Clear Picture</label>
        <label for="" class="block text-sm font-medium leading-6 text-white">ignore</label>
        </div>


<input type='file' name='file' 
onChange={handleImage} class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size"/>

      </div>

        <div className='mt-4'>
          <button type="submit" class="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12">Register</button>
        </div>

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

