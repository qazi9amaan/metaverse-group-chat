import { Fragment } from "react";
import TimeAgo from "timeago-react";


function SenderMessage({ message }) {
  return (
    <Fragment>
      <div className="flex justify-end mt-3">
        <div className=" max-w-2/5">
          <div className="bg-teal-300 p-2 px-5 rounded-full">
            <h4 className="mb-0 text-black pb-0">{message.get("message")} </h4>
          </div>
          <small className="flex pt-0 justify-end mr-2 font-normal text-gray-500">
            {
              <TimeAgo
                className="text-[10px] "
                datetime={message.get("createdAt")}
              />
            }
          </small>
        </div>
      </div>
    </Fragment>
  );
}

export default SenderMessage
