import { Fragment } from "react";
import RecieverMessage from "../Messages/RecieverMessage";
import SenderMessage from "../Messages/SenderMessage";

function MessageItem({ message, user }) {
  return (
    <Fragment>
      {message.get("ethAddress") === user.get("ethAddress") ? (
        <SenderMessage message={message} />
      ) : (
        <RecieverMessage message={message} />
      )}
    </Fragment>
  );
}

export default MessageItem
