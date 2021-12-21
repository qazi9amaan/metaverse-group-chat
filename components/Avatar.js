import Image from "next/image";
import { Fragment, useState } from "react";
import ProfileSettingsModal from "./ProfileSettingsModal";

function Avatar({ user }) {
  return (
    <Fragment>
      <Image
        className="object-cover rounded-full mr-1 hover:cursor-pointer"
        src={`https://avatars.dicebear.com/api/pixel-art/${
          user.get("username")
        }.svg`}
        width={24}
        height={24}
      />
      
    </Fragment>
  );
}

export default Avatar
