import Image from "next/image";

function Login({ authenticate }) {
  return (
    <div className="bg-black relative ">
      <div
        className="flex 
            flex-col 
            justify-end h-5/6 w-full
            items-center 
            absolute z-50"
      >
        <button
          onClick={() => authenticate()}
          className="font-bold ml-4 
                 text-orange-100 animate-pulse
                 rounded-lg p-5 bg-pink-800"
        >
          Login to start the group chat
        </button>
      </div>

      <div className="w-full h-screen">
        <Image objectFit="cover" src="/img/bg2.jpg" layout="fill" />
      </div>
    </div>
  );
}

export default Login
