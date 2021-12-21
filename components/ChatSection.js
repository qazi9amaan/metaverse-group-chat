import { Fragment, useRef } from "react";
import BodyNavbar from "./BodyNavbar";
import ChatBody from "./ChatBody";
import MessageBox from "./MessageBox";



function ChatSection() {
    const eofMessages = useRef(null);


    return (
      <Fragment>
          <BodyNavbar title={"Global chats"}/>
        <ChatBody eofMessages={eofMessages} />
        <div className="flex align-middle justify-center w-100">
          <MessageBox eofMessages ={eofMessages}/>
        </div>
      </Fragment>
    );
}

export default ChatSection
