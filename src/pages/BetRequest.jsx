import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import newRequest from '../utils/newRequest'
import "./betrequest.css"
import Confetti from 'react-confetti'

const BetRequest = () => {
  const navigate = useNavigate()
 const [confettiActive, setConfettiActive] = useState(true); 


  const handleSubmit = async (e) => {
    e.preventDefault()
    const betwinnerId = e.target[0].value;
    console.log('betwinnerId', betwinnerId)

    try {
      const betwinnerIdCheckResponse = await newRequest.post('tribe/check/betwinnerId', { betwinnerId });

      console.log(betwinnerIdCheckResponse.data)
      const savedUserData_ = localStorage.getItem('currentUser')
      const savedUserData = savedUserData_ ? JSON.parse(savedUserData_) : {}
      savedUserData.betwinnerId = betwinnerId
      localStorage.setItem('currentUser', JSON.stringify(savedUserData))

      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

    useEffect(() => {
      const confettiTimer = setTimeout(() => {
        setConfettiActive(false);
      }, 5000);

      // Cleanup the timer to avoid memory leaks
      return () => clearTimeout(confettiTimer);
    }, []);

return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col justify-center px-6 py-8 lg:px-8 shadow-xl rounded-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {confettiActive && <Confetti />}
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[100px] w-[150px]"
          src="./GameLogo.png"
          alt="Your Company"
        />
        <h2 className="change">
          {" "}
          Thank you for registering for the Games Fiesta!!
        </h2>
        <h2 className="mt-10 text-center text-3xl font-bold text- leading-9 tracking-tight text-gray-900 ">
          ARE YOU INTERESTED IN THE BETTRIBES COMPETITION?
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                BETWINNER ID
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-white hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="number"
                required
                pattern="[0-9]{6}" // This pattern allows only 6-digit numbers
                title="Please enter a 6-digit number"
                maxLength="6"
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12"
            >
              SUBMIT ID
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}

export default BetRequest