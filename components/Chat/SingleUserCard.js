import Avatar from "../shared/Avatar";

function SingleUserCard({
  setbigScreen,
  selctedStyle,
  friend,
}) {
  return (
    <div onClick={() => setbigScreen("Private Chat")} className="group">
      <div className={selctedStyle("Private Chat")}>
        <div className="flex">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className=" flex-shrink-0 ml-2 mr-2">
                <div
                  className="
                     bg-slate-700   align-middle
                     justify-center  flex rounded-full border-2
                border-slate-600  "
                >
                  <Avatar
                    username={friend["username"]}
                    width={35}
                    height={35}
                  />
                </div>
              </div>
              <div className="flex ml-2 flex-grow flex-col">
                <h3 className="font-semibold">{friend["username"]}</h3>
                <p className=" text-xs text-ellipsis overflow-hidden w-5/6 text-gray-400">
                  {friend["ethAddress"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserCard
