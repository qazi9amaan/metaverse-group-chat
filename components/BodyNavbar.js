import { IoMdLogOut } from "react-icons/io";
import { useMoralis } from "react-moralis";

function BodyNavbar({title}) {
        const { logout } = useMoralis();
    return (
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
          {title}
        </h3>
        <IoMdLogOut
          onClick={logout}
          size={21}
          className="mr-2 text-gray-400 hover:text-white hover:cursor-pointer"
        />
      </div>
    );
}

export default BodyNavbar
