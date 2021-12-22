import { BsGlobe } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import { Fragment } from "react";
import Avatar from "./Avatar";
import Image from "next/image";


function PeopleChat({ bigScreen, setbigScreen, user }) {
  const selctedStyle = (val) => {
    return val == bigScreen
      ? "flex justify-between  py-4 px-1 bg-teal-800 "
      : "flex justify-between bg-teal-700  py-4 px-1  group-hover:bg-teal-900 group-hover:cursor-pointer ";
  };

  return (
    <div className="100vh text-white  ">
      <div
        className="flex sticky top-0 justify-between 
              p-3 pb-3 pt-4  bg-teal-600"
      >
        <h3></h3>
        <h3 className=" text-teal-900 font-bold"></h3>
        <Fragment>
          <IoMdCreate
            onClick={() => {
              setbigScreen("settings");
            }}
            size={21}
            className="mr-2 text-teal-800 hover:text-teal-900 hover:cursor-pointer rounded-full"
          />
        </Fragment>
      </div>

      <div className="">
        <div
          className=" bg-teal-600
                      pt-5 pb-4 
                        -z-10   shadow-2xl align-middle 
                     justify-center  flex 
                     w-100
                     h-100
                 "
        >
          <Image
            onClick={() => {
              authenticate();
            }}
            className="object-cover rounded-full bg-stone-900  h-100 mr-1 hover:cursor-pointer"
            src={`https://avatars.dicebear.com/api/pixel-art/we-are-here-${user.get(
              "username"
            )}.svg`}
            width={160}
            height={160}
          />
        </div>
        <h2 className="text-teal-900 text-xl  bg-teal-600 text-center font-bold">
          @{user.get("username")}
        </h2>
        <p className="text-teal-800 flex justify-center text-xs pb-6 bg-teal-600 text-center  ">
          <p className="w-5/6"> This username will be shown be the public , you can change it</p>
        </p>
      </div>

      <div onClick={() => setbigScreen("global")} className="group">
        <div className={selctedStyle("global")}>
          <div className="flex">
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <BsGlobe
                    size={28}
                    className="  mr-3 ml-3 text-white group-hover:text-white  hover:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">Global chat room</h3>
                  <p className="text-xs text-white opacity-60">
                    Chat with our community globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleChat;
