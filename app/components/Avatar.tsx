"use client";

interface AvatarProps {
  src: string | null | undefined
}

import Image from "next/image";
import { FC } from "react";
const Avatar:FC<AvatarProps> = ({src}) => {
  return (
    <Image
      className="rounded-full "
      height="30"
      width="30"
      alt="avatar"
      src={ src || "/images/placeholder.jpg"}
    />
  );
};
export default Avatar;
