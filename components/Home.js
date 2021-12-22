import Head from "next/head";
import { useMoralis } from "react-moralis";
import {  useEffect, useState } from "react";

import BodySection from "./BodySection";
import PeopleChat from "./shared/People";

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
                pb-4 
                overflow-y-auto bg-teal-600  "
          >
            <PeopleChat
              user={user}
              bigScreen={bigScreen}
              setbigScreen={setbigScreen}
            />
          </div>

          <div className="h-screen flex-grow flex flex-col ">
            <BodySection bigScreen={bigScreen} setbigScreen={setbigScreen} />
          </div>
        </div>
      </div>
    );
}

export default HomePage;
