import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Background from "../assets/2.png"

const Register = () => {
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState(null);

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
    try {
      console.log("this is user", user);
      const registrationResponse = await newRequest.post(
        "register",
        user
      ).then(res => res.data);
      
      const participantData = registrationResponse.data.participant
      localStorage.setItem("currentUser", JSON.stringify(participantData));

      navigate("/betrequest");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl" style={{background:`url(${Background})`}} >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[100px] w-[150px]"
          src="./GameLogo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up For BetWinner Event
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
                type="text"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
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
                // maxDate={today} // Optional: To prevent selecting future dates
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#2C5C4B] px-3 py-1.5 text-md font-semibold leading-6 text-[#FFC000] shadow-sm hover:bg-[#93C572] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-12"
            >
              REGISTER
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-md text-gray-500">
          Already have an account?
          <Link to={"/login"}>
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            >
              login
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
