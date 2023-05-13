import { useRef } from "react";
import Button from "../components/button";
import { FaRegUser } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/all";
import { bringToFocus } from "../utils/functions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  function performLogin(e) {
    e.preventDefault();

    if (password === "password" && email === "user@example.com") {
      console.log("correct password");
      navigate("/marketplace");
    }else{
 setError(true);
    }
  }
function toggleVisibilty() {

  setPasswordVisible(!passwordVisible);
}
function handleChange(){
  setError(false);
setEmail(emailRef.current.value);
setPassword(passwordRef.current.value);

}


  return (
    <div className="h-full max-h-screen md:flex justify-center items-center text-darkblue ">
      <div className="my-[30%]">
        <form className="max-w-[400px] w-[90%] md:w-[400px] border-darkblue  border-4 rounded-md relative mx-auto bg-white p-6">
          <button className="rounded-full text-center bg-darkblue right-6 absolute  py-0 px-2 text-white font-bold">
            ?
          </button>
          <img src="/logo1.png" className="w-[50%] mt-4 mx-auto" />
          <div className="my-7 relative">
            <input
              required
              ref={emailRef}
              type="email"
              placeholder={" "}
              onChange={handleChange}
              className="bg-transparent peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(emailRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              <FaRegUser className="inline" /> Email
            </label>
          </div>{" "}
          <div className="my-7 relative">
            <input
              required
              placeholder={" "}
              ref={passwordRef}
              type={!passwordVisible ? "password" : "text"}
              onChange={handleChange}
              className="bg-transparent  peer w-[80%] mx-[10%] md:w-[80%] focus:border-darkorange placeholder:text-darkblue/90  h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(passwordRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
              block w-[77%]
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-[10%]"
            >
              <FaRegUser className="inline" /> Password
            </label>
            <div onClick={()=>toggleVisibilty()} className="absolute right-[20%] top-[40%]">
              <AiFillEyeInvisible size={20} className="inline absolute  " />{" "}
            </div>
          </div>
          <p className={`text-red-600 text-sm text-center ${error?"visible":"invisible"}`}>
            Wrong username or password
          </p>
          <Button
            // onSubmit={(e) => performLogin(e)}
            onClick={(e) => performLogin(e)}
            className="bg-darkorange font-bold text-white mt-4 w-[80%] mx-[10%] md:w-[80%]"
          >
            Login
          </Button>
          <div className="w-[80%] mx-[10%] text-xs mt-6 md:w-[80%] ">
            <a href="/forgot-password">
              <p className="my-3 text-center">Forgot Password?</p>
            </a>{" "}
            <div className="">
              <hr className="border-darkblue mx-auto border-t-4 w-[90%]" />
            </div>{" "}
            <a href="/createaccount">
              <p className="text-center my-3">
                Don&apos;t Have an Account?Sign up
              </p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
