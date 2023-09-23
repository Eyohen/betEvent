import { useNavigate } from 'react-router-dom'
import newRequest from '../utils/newRequest'
import "./betrequest.css"

const BetRequest = () => {
  const navigate = useNavigate()
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

  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl mt-16">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-[100px] w-[150px]"
            src="./GameLogo.png"
            alt="Your Company"
          />
          {/* <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#2C5C4B]"> Thank you for registering for the Games Fiesta!!</h2> */}
          <h2 className="change">
            {" "}
            Thank you for registering for the Games Fiesta!!
          </h2>
          <h2 class="mt-10 text-center text-3xl font-bold text- leading-9 tracking-tight text-gray-900 ">
            ARE YOU INTERESTED IN THE BETTRIBES COMPETITION?
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-md font-medium leading-6 text-gray-900"
                >
                  BETWINNER ID
                </label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-white hover:text-white">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  type="number"
                  required
                  pattern="[0-9]{6}" // This pattern allows only 6-digit numbers
                  title="Please enter a 6-digit number"
                  maxLength="6"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12"
              >
                SUBMIT ID
              </button>
            </div>
          </form>

          {/* <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p> */}
        </div>
      </div>
    </div>
  );
}

export default BetRequest