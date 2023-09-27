import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Intro from "../assets/Intro.png"
// import greenbg from "../assets/greenbg.png"
import yellowbg from "../assets/yellowbg.png"


const Register = () => {
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState(null);
const [showImagePopup, setShowImagePopup] = useState(true);
const [isLoading, setIsLoading] = useState(false);




  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    birthday: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDateChange = (date) => {
    // Update the user state with the selected date in YYYY-MM-DD format
    setUser((prev) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based, so add 1 and pad with '0' if necessary
      const day = String(date.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      return { ...prev, birthday: formattedDate };
    });
    setBirthday(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to tru
    try {
      console.log("this is user", user);
      const registrationResponse = await newRequest
        .post("register", user)
        .then((res) => res.data);

      const participantData = registrationResponse.data.participant;
      localStorage.setItem("currentUser", JSON.stringify(participantData));

      navigate("/betrequest");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Set loading back to false
    }
  };

  
  const handleLoginClick = () => {
    // Use navigate to go to the "/login" route
    navigate("/login");
  };

  useEffect(() => {
    // Use a setTimeout to hide the image after 3 seconds
    const timer = setTimeout(() => {
      setShowImagePopup(false);
    }, 1000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    // add image Intro to background with tailwind

    <div
      className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl bg-[#F2F2F2]"
      style={{
        backgroundImage: `url(${yellowbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {showImagePopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <img
            className="mx-auto max-h-screen max-w-screen object-contain"
            src={Intro}
            alt="Popup Image"
          />
        </div>
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[100px] w-[150px]"
          src="./GameLogo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up for Games Fiesta
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
                FIRST NAME
              </label>
              {/* <label className="text-white">ignore</label> */}
            </div>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                label="First Name"
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
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                LAST NAME
              </label>
              {/* <label className="text-white">ignore</label> */}
            </div>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
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
                PHONE NUMBER
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
                id="phone"
                name="phone"
                type="number"
                placeholder="08123***"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                EMAIL ADDRESS
              </label>
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label> */}
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

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="block text-md font-medium leading-6 text-gray-900"
              >
                COUNTRY
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
                id="country"
                name="country"
                type="text"
                placeholder="e.g Nigeria"
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
                STATE
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
                id="state"
                name="state"
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
                CITY
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
                id="city"
                name="city"
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
                DATE OF BIRTH
              </label>
              {/* <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-white"
              >
                ignore
              </label> */}
            </div>
            <div className="mt-2">
              {/* Date Picker */}
              <DatePicker
                id="birthday"
                name="birthday"
                selected={birthday}
                onChange={handleDateChange}
              
                dateFormat="yyyy-MM-dd"
                maxDate={minDate}
                yearDropdown
                scrollableYearDropdown
                showMonthDropdown
                showYearDropdown
                scrollableMonthDropdown
                // maxDate={today} // Optional: To prevent selecting future dates
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
              {isLoading ? "Loading..." : "REGISTER"}{" "}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-md text-black-500">
          Already have an account?
          <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
