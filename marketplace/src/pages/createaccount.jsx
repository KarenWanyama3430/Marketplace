import Button from "../components/button";

export default function CreateAccount() {
  return (
    <div className="h-full max-h-screen  md:flex justify-center items-center text-darkblue ">
      <div className=" w-[80%] md:max-w-[400px]  border-darkblue md:my-[10%] my-[30%] md:h-[80%] border-4 rounded-md relative mx-auto bg-white p-6">
        <button className="rounded-full text-center bg-darkblue right-6 absolute  py-0 px-2 text-white font-bold">
          ?
        </button>
        <div className="md:flex justify-center items-center flex-col 2xl:my-[33%] xl:my-[25%] my-[20%]">
          <img src="/logo1.png" className="w-[50%] mt-4 mx-auto" />
          <a
            className="mt-4 mb-3 w-[80%] md:mx-[10%] md:w-[80%]"
            href="/signup"
          >
            <Button className="bg-darkblue font-bold text-white mt-4 w-[100%]  ">
              Motorist
            </Button>
          </a>
          <a
            className="mt-2 mb-4 w-[80%] md:mx-[10%] md:w-[80%]"
            href="/signup"
          >
            <Button className="bg-darkorange font-bold text-white mt-4 w-[100%] ">
              Motorcyclist
            </Button>
          </a>
        </div>
        <p className="absolute text-[.75rem] p-1 bg-white right-4 -bottom-[2%]">
          About SkyTOP Technologies Ltd
        </p>
      </div>
    </div>
  );
}
