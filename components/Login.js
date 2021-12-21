import Image from "next/image";
import { useState } from "react";

function Login({ authenticate }) {

  const [loginNow, setloginNow] = useState("Connect now ");
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 5000);


  return (
    <div className="bg-black relative ">
      <div
        className="flex 
            flex-col 
            justify-center h-screen w-full
            items-center 
            absolute z-50"
      >
        <div
          className=" bg-teal-500 border-4 border-teal-900 
                        -z-10  p-2 shadow-2xl align-middle animate-bounce
                     justify-center  flex rounded-full
                 "
        >
          <Image
            onClick={() => {
              authenticate();
            }}
            className="object-cover rounded-full -z-30 mr-1 hover:cursor-pointer"
            src={`https://avatars.dicebear.com/api/pixel-art/we-are-here-${date}.svg`}
            width={160}
            height={160}
          />
        </div>
        <h2 className="text-white opacity-80 mt-4 text-center font-semibold"> Connect your wallet now to<br/> start texting through your ethereum address </h2>
        <button
          onClick={() => {
            setloginNow("Connecting to the wallet ....");
            authenticate();
          }}
          className="font-bold  mt-5
                 text-teal-900 px-5
                 rounded-xl p-3 shadow-2xl bg-teal-300 "
        >
          {loginNow}
        </button>
      </div>

      <div className="w-full h-screen  blur opacity-70">
        <Image objectFit="cover" src="/img/bg-3.jpg" layout="fill" />
      </div>
    </div>
  );
}

export default Login
