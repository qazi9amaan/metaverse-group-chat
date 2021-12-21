import { Fragment, useState } from "react";
import { useMoralis } from "react-moralis";
import BodyNavbar from "./BodyNavbar";

function Settings({ setbigScreen }) {
  const { user } = useMoralis();
  const [username, setnewUsername] = useState(user.getUsername());
  const { setUserData } = useMoralis();

  const savenewUsername = () => {
    if (username == null) return;
    setUserData({ username, unameset: true });
    return;
  };
  return (
    <Fragment>
      <BodyNavbar title={"Settings"} />
      <div className=" h-screen w-100 bg-black  outline-none focus:outline-none">
        <h3 className="text-3xl font-semibold text-white">
          Change your username
        </h3>

        {/*body*/}
        <div className="relative p-6 flex-auto">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase  text-gray-600 text-sm font-bold mb-1">
                eth Address
              </label>
              <input
                disabled
                className="w-full  p-2 rounded-md border-2 mb-2 bg-gray-200"
                placeholder="What's your username?"
                value={user.get("ethAddress")}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase  text-gray-600 text-sm font-bold mb-1">
                USERNAME
              </label>
              <input
                onChange={(e) => {
                  setnewUsername(e.target.value);
                }}
                className="w-full  p-2 rounded-md border-2 border-gray-300"
                placeholder="What's your username?"
                value={username}
              />
            </div>
          </div>
          <p className="mb-2 pt-0 text-gray-500 text-sm leading-relaxed">
            Your username will be visible to other users and your profile
            picture is generated on the same username, please make sure you
            change it.
          </p>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6   rounded-b">
          <button
            className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setbigScreen('global')}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 rounded-lg text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={savenewUsername}
          >
            Change
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Settings
