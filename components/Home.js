import Head from "next/head";
import { useMoralis } from "react-moralis";
import PeopleChat from "./People";
import { IoMdLogOut, IoMdCreate } from "react-icons/io";
import Avatar from "./Avatar";
import { Fragment, useState } from "react";
import ProfileSettingsModal from "./ProfileSettingsModal";
import ChatSection from "./ChatSection";

function HomePage() {
    const { logout, user } = useMoralis();
   
    const [username, setUsername] = useState(user.getUsername());
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="h-screen">
        <Head>
          <title>Metaverse</title>
        </Head>

        <div className="flex">
          <div
            className="h-screen w-80 
                border-r-2 pb-4 border-stone-900
                overflow-y-auto bg-black
                "
          >
            <div
              className="flex sticky top-0 justify-between 
              p-3 border-b-2 pb-3 pt-4 border-stone-900"
            >
              <Avatar
                myprofile={true}
                user={user}
                username={username}
                setUsername={setUsername}
              />
              <h3 className="text-white font-bold">Metachat</h3>
              <Fragment>
                <IoMdCreate
                  onClick={() => {
                    setShowModal(true);
                  }}
                  size={21}
                  className="mr-2 text-gray-400 hover:text-white hover:cursor-pointer rounded-full"
                />
                <ProfileSettingsModal
                  user={user}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Fragment>
            </div>

            <PeopleChat />
          </div>

          <div className="h-screen w-full flex flex-col grow">
            <div
              className="flex sticky top-0 
                justify-between align-middle 
                 bg-black    p-3 pb-3 pt-4
                border-b-2 border-zinc-900"
            >
              <h3></h3>
              <h3
                className="font-semibold 
              text-gray-50"
              >
                Metachat
              </h3>
              <IoMdLogOut
                onClick={logout}
                size={21}
                className="mr-2 text-gray-400 hover:text-white hover:cursor-pointer"
              />
            </div>

           <ChatSection/>
          </div>
        </div>
      </div>
    );
}

export default HomePage;
