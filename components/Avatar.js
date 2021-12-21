import Image from "next/image";
import { Fragment, useState } from "react";
import ProfileSettingsModal from "./ProfileSettingsModal";

function Avatar({ username , user, width = 24, height = 24 }) {
  return (
    <Fragment>
      <Image
        className="object-cover rounded-full -z-30 mr-1 hover:cursor-pointer"
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get("username")
        }.svg`}
        width={width}
        height={height}
      />
    </Fragment>
  );
}

export default Avatar
