import Button from "../components/button";
import { FaRegUser, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/all";
import { useRef,useState } from "react";
import { AiFillEyeInvisible } from "react-icons/all";

import { bringToFocus } from "../utils/functions";

export default function Login() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emergecyContactRef = useRef();
  const termsAndConditionsRef = useRef();
    const [passwordVisible, setPasswordVisible] = useState(false);


function toggleVisibilty() {
  setPasswordVisible(!passwordVisible);
}


  return (
    <div className="h-full max-h-screen md:flex justify-center items-center text-darkblue ">
      <div className="my-[10%]">
        <form className="max-w-[400px] w-[90%] md:w-[400px] border-darkblue  border-4 rounded-md relative mx-auto bg-white p-6">
          <button className="rounded-full text-center bg-darkblue right-6 absolute  py-0 px-2 text-white font-bold">
            ?
          </button>
          <img src="/logo1.png" className="w-[30%] mx-auto" />
          <div className="my-4 relative">
            <input
              required
              placeholder={" "}
              type="text"
              ref={fullNameRef}
              className="bg-transparent peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(fullNameRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              <FaRegUser className="inline" /> Full Name
            </label>
          </div>{" "}
          <div className="my-4 relative">
            <input
              required
              placeholder={" "}
              type="email"
              ref={emailRef}
              className="bg-transparent peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(emailRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              <AiOutlineMail className="inline" /> Email
            </label>
          </div>{" "}
          <div className="my-4 relative">
            <input
              required
              placeholder={" "}
              type="text"
              ref={phoneRef}
              className="bg-transparent peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(phoneRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              <FaPhone className="inline" /> Phone Number e.g. 0723XXX256
            </label>
          </div>{" "}
          <div className="my-4 relative">
            <input
              required
              placeholder={" "}
              type={!passwordVisible ? "password" : "text"}
              ref={passwordRef}
              className="bg-transparent peer w-[80%] mx-[10%]  md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(passwordRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              Password
            </label>
            <div
              onClick={() => toggleVisibilty()}
              className="absolute right-[20%] top-[40%]"
            >
              <AiFillEyeInvisible size={20} className="inline absolute  " />{" "}
            </div>
          </div>
          <div className="my-4 relative">
            <input
              required
              placeholder={" "}
              type={!passwordVisible ? "password" : "text"}
              ref={confirmPasswordRef}
              className="bg-transparent  peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90  h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(confirmPasswordRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              Confirm Password
            </label>
            <div
              onClick={() => toggleVisibilty()}
              className="absolute right-[20%] top-[40%]"
            >
              <AiFillEyeInvisible size={20} className="inline absolute  " />{" "}
            </div>
          </div>
          <div className="my-4 relative">
            <input
              placeholder={" "}
              type="text"
              ref={emergecyContactRef}
              className="bg-transparent  peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90  h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(emergecyContactRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              Emergency Contact(optional)
            </label>
          </div>
          <div className="my-4 grid grid-cols-12">
            <input
              required
              placeholder={" "}
              type="checkbox"
              ref={termsAndConditionsRef}
              className="focus:outline-none h-4 mt-1 col-span-1 border-darkblue border-3 "
              name="agree"
            />
            <label
              onClick={() => bringToFocus(termsAndConditionsRef)}
              className="col-span-11 select-none text-cyan-300 text-sm"
            >
              By signing up you have agreed to the Terms and Conditions &
              Privacy Policy
            </label>
          </div>
          <Button className="bg-darkblue font-bold text-white mt-2 w-[80%] mx-[10%] md:w-[80%]">
            Sign Up
          </Button>
          <div className="w-[80%] mx-[10%] font-bold  md:w-[80%] ">
            {" "}
            <div className="hidden">
              <hr className="border-darkblue mt-2 mx-auto border-t-4 w-[90%]" />
            </div>
            <a href="/login">
              <p className="mt-4 text-center">Or Login</p>
            </a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
