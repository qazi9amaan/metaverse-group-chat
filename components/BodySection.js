import React from "react";
import ChatSection from "./BodyPages/ChatSection";
import Settings from "./BodyPages/Settings";

function BodySection({ bigScreen, setbigScreen }) {
  switch (bigScreen) {
    case "global":
      return <ChatSection />;
    case "settings":
      return <Settings setbigScreen={setbigScreen} />;
  }
}

export default BodySection
