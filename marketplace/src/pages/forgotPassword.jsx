import { useRef } from "react";
import Button from "../components/button";
import { bringToFocus } from "../utils/functions";

import { FaPhone } from "react-icons/fa";

export default function ForgotPassword() {

const phoneRef = useRef();

  return (
    <div className="h-full max-h-screen  md:flex justify-center items-center text-darkblue ">
      <div className=" w-[80%] md:w-[100%] md:max-w-[450px] min-h-[70%] border-darkblue md:my-[10%] my-[30%] md:h-[80%] border-4 rounded-md relative mx-auto bg-white p-6">
        <button className="rounded-full text-center bg-darkblue right-6 absolute  py-0 px-2 text-white font-bold">
          ?
        </button>
        <div className=" mt-10">
          <img src="/logo1.png" className="w-[50%] mt-4 mx-auto" />
          <div className="my-4 mt-10 relative">
            <input
              placeholder={" "}
              required
              type="email"
              ref={phoneRef}
              className="bg-transparent peer w-[100%] focus:border-darkorange placeholder:text-darkblue/90 h-[3rem]
                  focus:outline-none border-darkblue border-b-2"
            />
            <label
              onClick={() => bringToFocus(phoneRef)}
              className="peer-focus:-top-3 text-sm peer-focus-within:block 
            peer-placeholder-shown:top-3 peer-placeholder-shown:visible -top-3
            absolute left-0"
            >
              <FaPhone className="inline" /> Enter Phone Number
            </label>
          </div>

          <Button className="bg-darkorange font-bold text-white mt-4 w-[90%] mx-[5%] ">
            Send Code
          </Button>

          <div className="text-center my-8 text-sm">
            <a href="/login">
              <p>Got your Password. Login Here</p>
            </a>
          </div>
        </div>
        <p className="absolute text-[.75rem] p-1 bg-white right-4 -bottom-[2%]">
          About SkyTOP Technologies Ltd
        </p>
      </div>
    </div>
  );
}
