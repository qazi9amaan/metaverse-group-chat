import React, { Fragment } from 'react'
import TimeAgo from 'timeago-react';
import Avatar from '../shared/Avatar';

function RecieverMessage({ message }) {
  return (
    <Fragment>
      <div className="flex justify-start mt-3">
        <div className="flex justify-start align-top items-start m-w-1/2">
          <div
            className="
                    flex-auto bg-slate-700 p-1 mt-2 align-middle
                     justify-center  flex rounded-full border-2
                border-slate-600 "
          >
            <Avatar  username={message.get("username")} width={20} height={20} />
          </div>
          <div className="ml-2">
            <div
              style={{ display: "inline-block" }}
              className=" bg-slate-700 p-2 w-auto px-5 rounded-full"
            >
              <h4 className="mb-0 pb-0">{message.get("message")}</h4>
            </div>
            <small className="flex pt-0 justify-start pl-4 font-normal text-gray-500">
              {
                <TimeAgo
                  className="text-[10px] italic"
                  datetime={message.get("createdAt")}
                />
              }
              <span className="text-gray-300 ml-2 text-ellipsis overflow-hidden ">
                @{message.get("username")}
              </span>
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RecieverMessage
