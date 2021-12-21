import { BsChatDots,BsGlobe } from "react-icons/bs";

function PeopleChat({ bigScreen, setbigScreen }) {

    const selctedStyle = (val) =>{
        return val == bigScreen
          ? "flex justify-between border-b-2 py-4 px-1  bg-zinc-900 border-zinc-900"
          : "flex justify-between border-b-2 py-4 px-1  group-hover:bg-zinc-900 group-hover:cursor-pointer border-zinc-900";
    }

  return (
    
    <div className="100vh text-white  ">
      <div onClick={() => setbigScreen("add-new-user")} className="group">
        <div className={selctedStyle("add-new-user")}>
          <div className="flex">
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <BsChatDots
                    size={28}
                    className="  mr-3 ml-3 text-gray-400 group-hover:text-white  hover:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">New message</h3>
                  <p className="text-xs text-gray-400">
                    Send messages over etherium addresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={() => setbigScreen("global")} className="group">
        <div className={selctedStyle("global")}>
          <div className="flex">
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  <BsGlobe
                    size={28}
                    className="  mr-3 ml-3 text-gray-400 group-hover:text-white  hover:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">Global chat room</h3>
                  <p className="text-xs text-gray-400">
                    Chat with our community globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* users */}
    </div>
  );
}

export default PeopleChat;
