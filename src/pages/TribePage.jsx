import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import newRequest from '../utils/newRequest';
import { useQuery } from "@tanstack/react-query";
import MyLogo from '../assets/GameLogo.png'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import yellowbg from "../assets/yellowbg.png"
const TribePage = () => {
  const [user, setUser] = useState({
    gender: "male",
    shirtSize: "S",
    email: "",
    betwinnerId: "",
    socials: "",
  })
  const [profileImage, setProfileImage] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleImage = (e) => {
    e.preventDefault()
    console.log(e.target.files)
    setProfileImage(e.target.files[0])
  }

  const handleChange = (e) => {
    e.preventDefault()
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  }

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return

    console.log(currentUser)
    setUser((prev) => {
      return { ...prev, ...currentUser }
    })
  }, [])

  const { id } = useParams();
  const { data,  } = useQuery({
    queryKey: ['tribesingle'],
    queryFn: () => newRequest.get(`tribe/${id}`).then(res => {
      return res.data;
    })
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to tru

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('socials', user.socials);
    formData.append('gender', user.gender);
    formData.append('shirtSize', user.shirtSize);
    formData.append('betwinnerId', user.betwinnerId);
    formData.append('email', user.email);
    formData.append('betTribeId', id);

    // window.alert(JSON.stringify(formData))

    const dataToSend = Object.fromEntries(formData.entries());
    try {
      const tribeRegistrationResponse = await newRequest.post("tribe/register", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Update the user data in local storage to include betTribeLog
      const savedUserData_ = localStorage.getItem("currentUser");
      let savedUserData = savedUserData_
        ? JSON.parse(savedUserData_)
        : {};
      savedUserData = { ...savedUserData, ...tribeRegistrationResponse.data.data };
      localStorage.setItem("currentUser", JSON.stringify(savedUserData));

      navigate(`/seeteammembers/${id}`)
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message)
      navigate(`/home`)
    } finally {
      setIsLoading(false);
    } 
  };

  return (
    <div
      className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl"
      style={{
        backgroundImage: `url(${yellowbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[100px] w-[150px]"
          src={MyLogo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {data?.data?.name}
        </h2>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {data?.data?.memberCount}
        </h2>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {data?.data?.isFilled || data?.data?.memberCount >= 3
            ? "Sorry This group is filled up join another tribe"
            : "This group is not filled up yet"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                BETWINNER ID
              </label>
              {/* <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label>  */}
            </div>
            <div className="mt-2">
              <input
                id="betwinnerId"
                name="betwinnerId"
                type="text"
                required
                pattern="[0-9]{9}" // This pattern allows only 9-digit numbers
                title="Please enter a 9-digit number"
                onChange={handleChange}
                value={user.betwinnerId}
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                GENDER
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-white">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <select name="gender" id="gender" onChange={handleChange}>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Other</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                SHIRT SIZE
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-white">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2 rounded-lg">
              <select name="shirtSize" id="shirtSize" onChange={handleChange}>
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
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                INSTAGRAM MEDIA HANDLE
              </label>
              {/* <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label> */}
            </div>
            <div className="mt-2">
              <input
                id="socials"
                name="socials"
                type="text"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                EMAIL
              </label>
              {/* <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label>  */}
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={user.email}
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                UPLOAD A CLEAR PICTURE
              </label>
              {/* <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label> */}
            </div>

            <input
              type="file"
              name="file"
              onChange={handleImage}
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="large_size"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-md font-semibold leading-6 shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12"
              disabled={
                isLoading ||
                data?.data?.isFilled ||
                data?.data?.memberCount >= 3
              }
              style={{
                backgroundColor:
                  isLoading ||
                  data?.data?.isFilled ||
                  data?.data?.memberCount >= 3
                    ? "#ccc"
                    : "#2C5C4B",
                color:
                  isLoading ||
                  data?.data?.isFilled ||
                  data?.data?.memberCount >= 3
                    ? "#999"
                    : "#FFC000",
                cursor:
                  isLoading ||
                  data?.data?.isFilled ||
                  data?.data?.memberCount >= 3
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {isLoading ? "Loading..." : "Join Tribe"}
            </button>
          </div>
        </form>

        {/* <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p> */}
      </div>
    </div>
  );
}

export default TribePage

