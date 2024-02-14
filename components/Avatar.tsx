"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      alt="avatar"
      width={30}
      height={30}
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
