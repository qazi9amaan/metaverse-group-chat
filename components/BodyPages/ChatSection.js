import { Fragment, useRef, useState } from "react";
import BodyNavbar from "./BodyNavbar";
import ChatBody from "../Chat/ChatBody";
import MessageBox from "../Chat/MessageBox";



function ChatSection() {
    const eofMessages = useRef();
  const [show, setShow] = useState(false);

    return (
      <Fragment>
        <BodyNavbar title={"Global chats"} />
        <ChatBody setShow={setShow}  eofMessages={eofMessages} />
        <div className="flex align-middle justify-center w-100">
          <MessageBox show={show} setShow={setShow} eofMessages={eofMessages} />
        </div>
      </Fragment>
    );
}

export default ChatSection
