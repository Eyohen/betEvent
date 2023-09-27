import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import newRequest from '../utils/newRequest'
import greenbg from "../assets/greenbg.png";
const Login = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",

  })
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    e.preventDefault()
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to tru
    try {
      const response = await newRequest.get("participant", {
        params: { q: user.email },
      });

      const userData = response.data;
      if (!userData.data?.participants) {
        // User has not signed up
        navigate("/betrequest");
      }

      // Navigate to the betrequest page and pass the user data as state
      const userRecord = userData.data.participants[0];
      if (userRecord.BetTribeLog) {
        // User has already joined a tribe
        localStorage.setItem("currentUser", JSON.stringify(userRecord));
        navigate(`/seeteammembers/${userRecord.BetTribeLog.betTribeId}`);
      } else {
        // User signed up but has not joined a tribe
        navigate("/betrequest", { state: { userRecord } });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Set loading back to false
    }
  };

    const handleLoginClick = () => {
      // Use navigate to go to the "/" route
      navigate("/");
    };

  return (
    <div
      className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl bg-[#F2F2F2]"
      style={{
        backgroundImage: `url(${greenbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[100px] w-[150px]"
          src="../GameLogo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to you Join the Competition
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}{" "}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-md text-gray-500">
          Don&apos;t have an account?{" "}
          <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            onClick={handleLoginClick}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login