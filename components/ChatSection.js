import { Fragment } from "react";
import ChatBody from "./ChatBody";
import MessageBox from "./Message";

function ChatSection() {
    return (
      <Fragment>
        <ChatBody />
        <MessageBox/>
      </Fragment>
    );
}

export default ChatSection
