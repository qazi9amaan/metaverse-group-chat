import Head from "next/head";
import { useMoralis } from "react-moralis";
import {  IoMdCreate } from "react-icons/io";
import { Fragment, useEffect, useState } from "react";

import BodySection from "./BodySection";
import PeopleChat from "./shared/People";
import Avatar from "./shared/Avatar";

function HomePage() {
    const {  user } = useMoralis();
    const [bigScreen, setbigScreen] = useState('global');

    useEffect(() => {
      if (user.get("unameset") === undefined) {
        setbigScreen("settings");
      }
    }, [bigScreen]);

    return (
      <div className="h-screen">
        <Head>
          <title>Metaverse</title>
        </Head>

        <div className="flex">
          <div
            className="h-screen w-80 
                border-r-2 pb-4 border-stone-900
                overflow-y-auto bg-black  "
          >
            <div
              className="flex sticky top-0 justify-between 
              p-3 border-b-2 pb-3 pt-4 border-stone-900"
            >
              <Avatar user={user} />
              <h3 className="text-white font-bold">Metachat</h3>
              <Fragment>
                <IoMdCreate
                  onClick={() => {
                    setbigScreen("settings");
                  }}
                  size={21}
                  className="mr-2 text-gray-400 hover:text-white hover:cursor-pointer rounded-full"
                />
              </Fragment>
            </div>

            <PeopleChat bigScreen={bigScreen} setbigScreen={setbigScreen} />
          </div>

          <div className="h-screen flex-grow flex flex-col ">
            <BodySection bigScreen={bigScreen} setbigScreen={setbigScreen} />
          </div>
        </div>
      </div>
    );
}

export default HomePage;
