import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function ProfileSettingsModal({ showModal, setShowModal , user}) {

  const [username, setnewUsername] = useState(user.getUsername());
  const { setUserData } = useMoralis();

  const savenewUsername = ()=>{
    if (username == null) return;
    setUserData({ username, unameset : true });
    setShowModal(false);
    return
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative z-40 w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0  z-50 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Change your username
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
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
                    Your username will be visible to other users and your
                    profile picture is generated on the same username, please
                    make sure you change it.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
