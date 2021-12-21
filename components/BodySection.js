import ChatSection from "./ChatSection";

function BodySection({ bigScreen }) {
  switch(bigScreen) {
    case "global":return <ChatSection />;
    // case "add-new-user": return <AddNewUser />;
    default: return <div></div>;
  }
}

export default BodySection
